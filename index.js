const path = require('path');

const plPath = path.join(__dirname, 'vendor', 'exiftool');
const exePath = path.join(__dirname, 'vendor', 'exiftool.exe');

module.exports = process.platform === 'win32' ? exePath : plPath;
