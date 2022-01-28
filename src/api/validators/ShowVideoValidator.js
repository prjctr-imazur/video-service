const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class ShowVideoValidator extends RequestValidator {
  rules = joi.object().keys({
    params: joi
      .object({
        id: joi.number().positive(),
      })
      .unknown(true),
  });
}

module.exports = ShowVideoValidator;
