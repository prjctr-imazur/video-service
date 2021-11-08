const RequestValidator = require("../services/RequestValidator");
const VideoConverter = require("../services/VideoConverter");

class AddVideoController {
  constructor() {
    this.requestValidator = new RequestValidator();
    this.videoConverter = new VideoConverter();
  }

  before(req, res) {
    this.requestValidator.validate(req, res);
  }

  async handle(req, res) {
    this.requestValidator.validate(req, res);

    this.videoConverter.convert(req, res);
  }
}

module.exports = AddVideoController;
