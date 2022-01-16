const joi = require('joi');
const RequestValidator = require('./RequestValidator');

class DeleteVideoValidator extends RequestValidator {
  rules = joi.object().keys({
    params: joi.object({
      id: joi.number().positive(),
    }),
  });
}

module.exports = DeleteVideoValidator;
