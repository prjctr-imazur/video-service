const Router = require('koa-router');

const VideosController = require('./controllers/VideosController');
const AddVideoController = require('./controllers/AddVideoController');
const RequestValidatorError = require('./errors/RequestValidatorError');

const router = new Router();

router.get('/', async (ctx) => {
  try {
    const controller = new VideosController();
    ctx.body = await controller.handle();
  } catch (err) {
    ctx.throw(500);
  }
});

router.post('/upload', async (ctx) => {
  try {
    const controller = new AddVideoController();
    ctx.body = await controller.handle(ctx.req);
  } catch (err) {
    if (err instanceof RequestValidatorError) {
      ctx.throw(415, err.message);
    } else {
      ctx.throw(500);
    }
  }
});

module.exports = router;
