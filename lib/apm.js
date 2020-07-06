const config = require('../config/default');

let apm;
module.exports = function () {
  if (!apm) {
    apm = require('elastic-apm-node').start(config.apmOption);
  }

  return apm;
};
