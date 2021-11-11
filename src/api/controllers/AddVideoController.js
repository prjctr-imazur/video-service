const VideoConverter = require('../../services/VideoConverter');
const RequestValidatorError = require('../errors/RequestValidatorError');
const AddVideoValidator = require('../validators/AddVideoValidator');

class AddVideoController {
  constructor() {
    this.addVideoValidator = new AddVideoValidator();
    this.videoConverter = new VideoConverter();
  }

  async handle(req) {
    const { error } = this.addVideoValidator.validate(req);

    if (error) {
      throw new RequestValidatorError(error);
    }

    return this.videoConverter.convert(req);
  }
}

module.exports = AddVideoController;
