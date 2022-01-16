const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class VideosValidator extends RequestValidator {
  rules = joi.object().keys({
    query: joi
      .object({
        userId: joi.number().positive().required(),
      })
      .unknown(true),
  });
}

module.exports = VideosValidator;
