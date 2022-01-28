const { Video } = require('../../database/models');

class ShowVideoController {
  async handle({ id }) {
    return Video.findOne({ where: { id } });
  }
}

module.exports = ShowVideoController;
