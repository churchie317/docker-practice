const handlers = require('./handlers');

module.exports = (app) => {
  // allow nginx web server to serve static content in production
  if (process.env.NODE_ENV !== 'production') {
    app.get('/', handlers.index);
  }
  app.post('/data', handlers.data);
  app.get('/all', handlers.all);
};
