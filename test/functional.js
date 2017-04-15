const request = require('supertest');
const app = require('../src/server/app');
const winston = require('winston');
const util = require('util');
const config = require('../config');

const baseURL = util.format('http://localhost:%s', config.port);

before(() => {
  app.listen(config.port, function(){
    winston.info(util.format("server listening on port %s", config.port));
  });
});

describe('Database creation', () => {
  it('should create and add data', function(done){
    request(baseURL)
      .post('/data')
      .set('Content-Type', 'application/json')
      .send({"ts":"2017-03-11T15:00:53Z", "type": "temp", "value": 34, "sensor_id": 123 })
      .expect(201)
      .end(function(err, res){
        if (err) throw err;
        done();
      });
  });
});
