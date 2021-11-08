const { readdir } = require("fs/promises");
const { resolve } = require("path");

class AllVideosController {
  constructor() {}

  async handle(req, res) {
    try {
      const storage = resolve(process.cwd(), "storage");
      const files = await readdir(storage);
      const filtered = files.filter((f) => f.endsWith(".mp4"));

      res.statusCode = 200;
      res.end(filtered.join(", "));
    } catch (err) {
      res.statusCode = 500;
      res.end("Error");
    }
  }
}

module.exports = AllVideosController;
