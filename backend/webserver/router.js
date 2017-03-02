/**
 * load routes
 * @param application
 */
module.exports = function (application) {
  //const cors = require('cors');
  //application.all('/api/*', cors());

  const home = require('./controllers/home');

  application.get('/', home.index);
  application.get('*', home.index);

  //const moduleApi = require('./api');

  //moduleApi.setupAPI(application);
};
