import { createPostInput, updatePostInput } from "@imshubham_s7/common-medium";
import type { MiddlewareHandler } from "hono";
import { jwt } from 'hono/jwt'

export const blogAuth: MiddlewareHandler = async (c,next) => {
   const jwtMiddleware = jwt({
      secret: c.env.JWT_SECRET,
    });
    return jwtMiddleware(c, next);
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