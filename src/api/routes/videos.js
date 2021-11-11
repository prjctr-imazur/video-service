const VideosController = require('../controllers/VideosController');
const AddVideoController = require('../controllers/AddVideoController');

function register(router) {
  router.get('/', async (ctx) => {
    const controller = new VideosController();

    ctx.body = await controller.handle();
  });

  router.post('/upload', async (ctx) => {
    const controller = new AddVideoController();

    ctx.body = await controller.handle(ctx.req);
  });
}

module.exports = { register };
