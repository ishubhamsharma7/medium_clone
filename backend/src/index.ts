import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
import { Bindings } from './helper/context';

export const app = new Hono<{
  Bindings: Bindings
}>();

const originUrl = 

app.use("*", (ctx, next) => {
  const corsMiddleware = cors({
      origin: ctx.env.CORS_ORIGIN ? ctx.env.CORS_ORIGIN : "http://localhost:5173",
      credentials:true
  })
  return corsMiddleware(ctx, next)
})

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
