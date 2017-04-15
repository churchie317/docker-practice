const influx = require('influx');

const config = {
  port: process.env.PORT || 1337,
  databaseOptions: {
    database: 'iot',
    port: 8086,
    schema: [
      {
        measurement: 'data',
        fields: {
          sensor_id: influx.FieldType.INTEGER,
          value: influx.FieldType.INTEGER
        },
        tags: {
          type: 'temp'
        },
        ts: influx.FieldType.STRING
      }
    ]
  }
};

let environmentSettings;
switch (process.env.NODE_ENV) {
  case 'production':
    environmentSettings = require('./production');
    break;
  case 'test':
    // TODO: WRITE TEST ENVIRONMENT SETTINGS
    environmentSettings = require('./development');
    break;
  default:
    environmentSettings = require('./development');
    break;
}


module.exports = Object.assign({}, config, environmentSettings);
