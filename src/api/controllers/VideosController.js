const { Video } = require('../../database/models');

class VideosController {
  async handle(ctx) {
    const { userId } = ctx.request.query;

    return Video.findAll({ where: { userId } });
  }
}

module.exports = VideosController;
