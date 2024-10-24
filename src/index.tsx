import { Env, Hono } from 'hono';
import { Hello } from './Hello';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const app = new Hono();
		app.get('/', (c) => c.html(<Hello message="Hono" />));
		return app.fetch(request, env, ctx);
	},
} satisfies ExportedHandler<Env>;
