import { handler } from '../build/handler.js';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

// import enforce from 'express-sslify';

const app = express();
const port = process.env.PORT || 4000;

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

app.use(
	'/api',
	createProxyMiddleware({
		target: 'https://api.spotify.com/v1',
		changeOrigin: true,
		pathRewrite: (path) => {
			console.log(path.replace(/^\/api/, ''));
			return path.replace(/^\/api/, '');
		}
	})
);

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(port, () => {
	console.log('--- app running port --> ' + port);
});
