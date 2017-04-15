const winston = require('winston');

exports.data = (req, res) => {
  const { type, sensor_id, value, ts } = req.body;
  const data = {
    ts: new Date(ts).getTime() * 1000000,
    measurement: 'data',
    tags: {
      type
    },
    fields: {
      sensor_id,
      value
    }
  };
  req.influx.writePoints([ data ]).then(() => {
    winston.info(req.body);
    res.sendStatus(201);
  }).catch((err) => {
    winston.error(err.message);
    res.sendStatus(500);
  });
};

exports.index = (req, res) => {
  res.sendStatus(200);
};
