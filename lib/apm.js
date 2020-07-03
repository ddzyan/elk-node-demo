let apm;
module.exports = function () {
  if (!apm) {
    apm = require('elastic-apm-node').start({
      serverUrl: 'http://47.100.16.124:8200',
      appName: 'test',
      serviceName: 'elk-node-demo',
    });
  }

  return apm;
};
