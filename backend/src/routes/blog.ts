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
		}
	});

	return c.json(post);
})

/// Add pagination here 
blogRouter.get('/bulk/posts',blogAuth, async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const post = await prisma.post.findMany();
	return c.json(post);
})


blogRouter.post('/',blogAuth, createBlogMiddleware ,async (c) => {
	const userId = c.get('jwtPayload').id;
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = c.get('body')

	console.log("=",userId)

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

	console.log("=>",body)

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

