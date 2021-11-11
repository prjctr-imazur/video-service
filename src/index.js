const Koa = require('koa');

const router = require('./api/router');

const config = { host: '127.0.0.1', port: 3000 };

const app = new Koa();

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`App is listening on http://${config.host}:${config.port}`);
});
