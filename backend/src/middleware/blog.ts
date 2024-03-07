import { createPostInput, updatePostInput } from "@imshubham_s7/common-medium";
import type { MiddlewareHandler } from "hono";
import { getCookie } from "hono/cookie";
import { decode } from 'hono/jwt'
import { CookieContext } from "../helper/context";

export const blogAuth: MiddlewareHandler<CookieContext> = async (c,next) => {
   
   const cookie =  getCookie(c,'token')

   if(!cookie) return c.json({message:"no token"});
   try {
      const decodeToken = decode(cookie)
      c.set('user',decodeToken.payload)
      await next()
   } catch (error) {
      return c.json({message:"Invalid User"})
   }
}


export const createBlogMiddleware : MiddlewareHandler = async(c,next)=>{
   const body = await c.req.json();
	
	const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
   c.set('body',body)
   await next()
}


export const updateBlogMiddleware : MiddlewareHandler = async(c,next)=>{
   const body = await c.req.json();
	
	const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

   c.set('body',body)
   await next()
}