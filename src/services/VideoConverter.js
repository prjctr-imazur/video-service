const os = require('os');
const fs = require('fs');
const { resolve, basename } = require('path');
const { v4: uuid } = require('uuid');
const hbjs = require('handbrake-js');

class VideoConverter {
  getInputFilePath() {
    return resolve(os.tmpdir(), `input.${uuid()}`);
  }

  getOutputFilePath() {
    const today = new Date().toISOString().substr(0, 10);

    return resolve(process.cwd(), 'storage', `${today}-${uuid()}.mp4`);
  }

  getFileExt(contentType = '') {
    const dict = {
      'video/mp4': 'mp4',
      'video/quicktime': 'mov',
      'video/x-msvideo': 'avi',
    };

    return dict[contentType];
  }

  async convert(req) {
    const ext = this.getFileExt(req.headers['content-type']);

    const input = `${this.getInputFilePath()}.${ext}`;

    const output = this.getOutputFilePath();

    req.pipe(fs.createWriteStream(input));

    try {
      await hbjs.run({ input, output });

      return basename(output);
    } finally {
      fs.unlink(input, (err) => {
        if (err) console.log(err);
      });
    }
  }
}

module.exports = VideoConverter;
