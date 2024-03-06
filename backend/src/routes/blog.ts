import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { blogContext } from "../helper/context";
import { blogAuth, createBlogMiddleware, updateBlogMiddleware } from "../middleware/blog";

export const blogRouter = new Hono<blogContext>();

blogRouter.get('/:id',blogAuth, async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		},
		select:{
			title:true,
			content:true,
			createdDate:true,
			author:{
				select:{
					name:true
				}
			},
			id:true
		}
	});

	return c.json(post);
})

/// Add pagination here 
blogRouter.get('/bulk/posts',blogAuth, async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const post = await prisma.post.findMany({
		select:{
			content:true,
			title:true,
			id:true,
			createdDate:true,
			author:{
				select:{
					name:true
				}
			}
		}
	});
	return c.json(post);
})


blogRouter.post('/',blogAuth, createBlogMiddleware ,async (c) => {
	const userId = c.get('jwtPayload').id;
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = c.get('body')

	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})

blogRouter.put('/',blogAuth, updateBlogMiddleware, async (c) => {
	const userId = c.get('jwtPayload').id;
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = c.get('body');

	const post = await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.json({
		id: post.id,
	 });
});