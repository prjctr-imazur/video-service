const Router = require('koa-router');

const health = require('./health');
const videos = require('./videos');

const router = new Router();

health.register(router);

videos.register(router);

module.exports = router;
