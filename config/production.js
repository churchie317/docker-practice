module.exports = {
  databaseOptions: {
    host: process.env.INFLUXDB_HOST,
    password: process.env.INFLUXDB_PASSWORD,
    username: process.env.INFLUXDB_USERNAME
  }
};
