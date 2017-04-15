const util = require('util');
const winston = require('winston');
const influx = require('../db/iot');
const app = require('../src/server/app');
const config = require('../config');

influx.getDatabaseNames()
  .then((names) => {
    if (!names.includes('iot')) {
      return influx.createDatabase('iot');
    }
  })
  .then(() => {
    app.listen(config.port, () => {
      winston.info(util.format(`server listening on port ${ config.port }`));
      winston.info(util.format(`running in --${ process.env.NODE_ENV }`));
    });
  })
  .catch((err) => {
    winston.error(err.message);
  });
