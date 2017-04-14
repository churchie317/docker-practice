const influx = require('../../../db/iot');

exports.attachInfluxClient = (req, res, next) => {
  req.influx = influx;
  next();
}
