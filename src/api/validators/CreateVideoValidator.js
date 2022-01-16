const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class CreateVideoValidator extends RequestValidator {
  rules = joi.object().keys({
    headers: joi
      .object({
        'content-type': joi
          .string()
          .allow('Content-Type')
          .valid('video/mp4', 'video/quicktime', 'video/x-msvideo'),
      })
      .unknown(true),
    query: joi.object({ userId: joi.number().positive().required() }),
  });
}

module.exports = CreateVideoValidator;
