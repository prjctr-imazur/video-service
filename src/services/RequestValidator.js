class RequestValidator {
  rules = ["video/mp4", "video/quicktime", "video/x-msvideo"];

  validate(req, res) {
    const contentType = req.headers["content-type"];

    res.statusCode = 415;

    if (!this.rules.includes(contentType)) {
      const allowedFileTypes = this.rules.join(", ");

      return res.end(
        `File type doesn't supported, allowed types '${allowedFileTypes}', '${contentType}' given`
      );
    }
  }
}

module.exports = RequestValidator;
