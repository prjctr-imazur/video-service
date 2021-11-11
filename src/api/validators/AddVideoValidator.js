class AddVideoValidator {
  rules = ['video/mp4', 'video/quicktime', 'video/x-msvideo'];

  validate(req) {
    const contentType = req.headers['content-type'];

    if (!this.rules.includes(contentType)) {
      const allowedFileTypes = this.rules.join(', ');

      return {
        error: `File type doesn't supported, allowed types '${allowedFileTypes}', '${contentType}' given`,
      };
    }

    return {};
  }
}

module.exports = AddVideoValidator;
