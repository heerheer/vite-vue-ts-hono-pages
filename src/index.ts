import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-pages";
import routes from './server';

const app = new Hono();

// API routes
app.route('/api', routes);

//默认情况下以/api为路口,vite.config.client.ts中配置了proxy
app.get('/api/hello', (c) => c.text('Hello Vite + Vue + Hono for cf-pages!'));

// Serve static files in production (Vue app)
if (process.env.NODE_ENV === 'production') {
  app.use('/*', serveStatic());
}

export default app;
