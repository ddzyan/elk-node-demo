const Logstash = require('logstash-client');
const logstash = new Logstash({
  type: 'udp',
  host: '10.10.0.122',
  port: 15044,
});
module.exports = {
  save(log) {
    if (log.error) {
      log.errMsg = log.error.message;
      log.errStack = log.error.stack;
    }
    logstash.send(log, console.log);
  },
};
