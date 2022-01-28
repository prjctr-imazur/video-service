const VideoConverter = require('../../services/VideoConverter');
const { Video } = require('../../database/models');

class CreateVideoController {
  constructor() {
    this.videoConverter = new VideoConverter();
  }

  async handle({ stream, userId }) {
    const filename = await this.videoConverter.convert(stream);

    return Video.create({ userId, filename });
  }
}

module.exports = CreateVideoController;
