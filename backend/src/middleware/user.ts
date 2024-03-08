import type { MiddlewareHandler } from "hono";
import { signinInput,signupInput,resetPassword} from "@imshubham_s7/common-medium";


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
 

export const userResetPasswordMiddleware: MiddlewareHandler = async (c, next) => {
   const body = await c.req.json();
   const {success} = resetPassword.safeParse(body)
   
   if(!success){
      c.status(400);
      return c.json({ error: "Invalid Input" });
   }  

   if(body.newPassword !== body.confirmPassword) return c.json({ error: "Passoword does not match" });
   
   c.set("resetPassword",body);
   await next();
};