const { Video } = require('../../database/models');

class DeleteVideoController {
  async handle({ id }) {
    return Video.destroy({ where: { id } });
  }
}

module.exports = DeleteVideoController;
