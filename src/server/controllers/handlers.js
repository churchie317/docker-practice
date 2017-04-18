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

exports.all = (req, res) => {
  let ROW_LIMIT = 1000;
  const queryLimit = parseInt(req.query.limit);

  if (!isNaN(queryLimit) && queryLimit < 1000 && queryLimit > 0) {
    ROW_LIMIT = queryLimit;
  }
  req.influx.query(
    `SELECT * FROM data
     order by time desc
     limit ${ ROW_LIMIT }`
  ).then((rows) => {
    res.send(rows);
  });
};

exports.index = (req, res) => {
  res.sendStatus(200);
};
