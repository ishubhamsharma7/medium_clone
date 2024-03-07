import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { userSigninMiddleware, userSignupMiddleware } from "../middleware/user";
import { hashPasswordFunction } from "../helper/passwordHash";
import { userContext } from "../helper/context";
import { setCookie } from "hono/cookie";


export const userRouter = new Hono<userContext>();

userRouter.post('/signup',userSignupMiddleware, async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = c.get("body");
    

    const hashedPass = await hashPasswordFunction(body.password);
  
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPass,
        name:body.name
      },
    });
  
    const token = await sign({ id: user.id,name:user.name,email:user.email }, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })
})
  
userRouter.post('/signin',userSigninMiddleware, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = c.get("body");

  const hashedPass = await hashPasswordFunction(body.password);
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (!user) {
    c.status(403);
    return c.json({ error: "User doesn't exist." });
  }
  if (user.password != hashedPass) {
    c.status(403);
    return c.json({ error: "Incorrect Password" });
  }

  const jwtToken = await sign({ id: user.id,name:user.name,email:user.email }, c.env.JWT_SECRET);
  setCookie(c,'token',jwtToken,{
    secure: true,
    httpOnly: true,
    sameSite: 'None',
  })
  return c.json({ jwtToken });
})