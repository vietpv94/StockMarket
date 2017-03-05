const express = require('express');
const path = require('path');

const FRONTEND_PATH = path.normalize(__dirname + '/../../frontend');

/**
 * Create Express server
 */

const app = express();
exports = module.exports = app;

/**
 * Express configuration
 */

app.set('views', FRONTEND_PATH + '/views')
app.set('view engine', 'jade');

app.use('/components', express.static(FRONTEND_PATH + '/components'));
app.use('/js', express.static(FRONTEND_PATH + '/js'));
app.use('/css', express.static(FRONTEND_PATH + '/views/css'));
require('./router')(app);
