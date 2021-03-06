const { getFile } = require('./files');

const writeFileSync = (path, data, options) => {
  const file = getFile(path);
  file.data = data;
  for (const watcher of file.watchers) {
    watcher(file);
  }
};

module.exports.writeFileSync = writeFileSync;
