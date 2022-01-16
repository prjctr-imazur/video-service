const { failure } = require('../helpers/respond');

function validate(validator) {
  return async (ctx, next) => {
    const { errors } = await validator.validate(ctx.request);

    if (errors !== null) {
      failure(ctx, errors);

      return;
    }

    await next();
  };
}

module.exports = {
  validate,
};
