const Influx = require('influx');
const config = require('../config');

const influxClient = new Influx.InfluxDB(config.databaseOptions);

module.exports = influxClient;
