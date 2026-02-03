const os = require('node:os');

function bytesToGb(b) {
  return (b / 1024 / 1024 / 1024).toFixed(2);
}

function getOsInfo() {
  return {
    platform: os.platform(),
    freeMemGb: bytesToGb(os.freemem()),
    homeDir: os.homedir(),
    hostName: os.hostname(),
    networkInterfaces: os.networkInterfaces()
  };
}

function isFreeMemMoreThan4Gb() {
  const fourGb = 4 * 1024 * 1024 * 1024;
  return os.freemem() > fourGb;
}

function printOsInfoIfAllowed() {
  const accessMode = (process.env.ACCESS_MODE || 'user').toLowerCase();
  if (accessMode !== 'admin') {
    console.log('Access denied: need admin mode (ACCESS_MODE=admin).');
    return;
  }
  console.log(getOsInfo());
}

module.exports = {
  getOsInfo,
  isFreeMemMoreThan4Gb,
  printOsInfoIfAllowed
};
