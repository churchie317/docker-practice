module.exports = {
  databaseOptions: {
    host: process.env.INFLUXDB_HOST,
    port: process.env.INFLUXDB_PORT,
    password: process.env.INFLUXDB_PASSWORD,
    username: process.env.INFLUXDB_USERNAME
  }
};
