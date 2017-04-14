const handlers = require('./handlers');

module.exports = (app) => {
  app.get('/', handlers.index);
  app.post('/data', handlers.data);
};
