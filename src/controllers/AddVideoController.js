const RequestValidator = require("../services/RequestValidator");
const VideoConverter = require("../services/VideoConverter");
const RequestValidatorError = require("../errors/RequestValidatorError");

class AddVideoController {
  constructor() {
    this.requestValidator = new RequestValidator();
    this.videoConverter = new VideoConverter();
  }

  async handle(req) {
    const { error } = this.requestValidator.validate(req);

    if (error) {
      throw new RequestValidatorError(error);
    }

    return this.videoConverter.convert(req);
  }
}

module.exports = AddVideoController;
