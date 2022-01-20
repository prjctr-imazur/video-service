const { validate } = require('../middleware/validation');
const { respond } = require('../helpers/respond');

const VideosValidator = require('../validators/VideosValidator');
const VideosController = require('../controllers/VideosController');

const CreateVideoValidator = require('../validators/CreateVideoValidator');
const CreateVideoController = require('../controllers/CreateVideoController');

const DeleteVideoValidator = require('../validators/DeleteVideoValidator');
const DeleteVideoController = require('../controllers/DeleteVideoController');

const ShowVideoValidator = require('../validators/ShowVideoValidator');
const ShowVideoController = require('../controllers/ShowVideoController');

function register(router) {
  router.get('/videos', validate(new VideosValidator()), async (ctx) => {
    const controller = new VideosController();

    const data = await controller.handle(ctx);

    respond(ctx, data);
  });

  router.post('/videos', validate(new CreateVideoValidator()), async (ctx) => {
    const { userId } = ctx.request.query;

    const controller = new CreateVideoController();

    const data = await controller.handle({
      stream: ctx.req,
      userId,
    });

    respond(ctx, data);
  });

  router.get('/videos/:id', validate(new ShowVideoValidator()), async (ctx) => {
    const { id } = ctx.request.params;

    const controller = new ShowVideoController();

    const data = await controller.handle({ id });

    return data ? respond(ctx, data) : respond(ctx, null, 404);
  });

  router.delete(
    '/videos/:id',
    validate(new DeleteVideoValidator()),
    async (ctx) => {
      const { id } = ctx.request.params;

      const controller = new DeleteVideoController();

      const data = await controller.handle({ id });

      return data ? respond(ctx, id) : respond(ctx, null, 404);
    }
  );
}

module.exports = { register };
