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

require('./router')(app);
