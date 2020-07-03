const apm = require('../lib/apm')();

module.exports = {
  save(log) {
    if (log.error) {
      log.errMsg = log.error.message;
      log.errStack = log.error.stack;
    }
    const { method, path } = log.this.request;
    apm.setTransactionName(`${method} ${path}`);
  },
};
