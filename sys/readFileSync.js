const fs = require('fs');
const readFileSyncBrowser = require('./readFileSyncBrowser');

const readFileSync = (path, options = {}) => {
  if (fs.readFileSync) {
    return fs.readFileSync(path, options);
  } else {
    return readFileSyncBrowser.readFileSync(path, options);
  }
};

module.exports.readFileSync = readFileSync;
