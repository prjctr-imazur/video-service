const { readdir } = require('fs/promises');
const { resolve } = require('path');

class VideosController {
  async handle() {
    const storage = resolve(process.cwd(), 'storage');

    const files = await readdir(storage);

    return files.filter((file) => file.endsWith('.mp4')).join('\n');
  }
}

module.exports = VideosController;
