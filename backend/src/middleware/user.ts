import type { MiddlewareHandler } from "hono";
import { signinInput,signupInput } from "@imshubham_s7/common-medium";


export const userSignupMiddleware: MiddlewareHandler = async (c,next) => {
   const body = await c.req.json()
   console.log(body)
   const {success} = signupInput.safeParse(body)

   if(!success){
      c.status(400);
      return c.json({ error: "Invalid Input" });
   }
   
   c.set("body",body);
   await next();
}

export const userSigninMiddleware: MiddlewareHandler = async (c, next) => {
   const body = await c.req.json();
   const {success} = signinInput.safeParse(body);
   if(!success){
     c.status(400);
     return c.json({ error: "Invalid Input" });
   }  
   c.set("body",body);
   await next();
 };
 