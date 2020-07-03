const log4js = require('log4js');
log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename: './log/all-the-logs.log',
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' },
  },
});

let logger;

module.exports = function () {
  if (!logger) {
    logger = log4js.getLogger();
  }

  return logger;
};
