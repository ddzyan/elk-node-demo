const log4js = require('./tools/log4js')();

exports.save = function save(record, ctx) {
  record.name = 'api';
  record.env = process.env.NODE_ENV;
  if (record.error) {
    record.error = {
      message: record.error.message,
      stack: record.error.stack,
      status: record.error.status || record.error.statusCode || 500,
    };
  }

  log4js.info(record);
};
