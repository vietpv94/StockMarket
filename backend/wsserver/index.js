'use strict';

const io = require('socket.io');
const express = require('express');


let wsserver = {};

function start(port, callback) {

  function listenCallBack(err) {
    wsserver.server.removeListener('listening', listenCallBack);
    wsserver.server.removeListener('error', listenCallBack);
    callback(err);
  }

  if (wsserver.started) {
    return callback();
  }

  wsserver.started = true;

  const webserver = require('../webserver').webserver;

  wsserver.port = port;

  if (webserver && webserver.server && wsserver.port === webserver.port) {
    console.log('Web socket will be attached to IPv4 Express Server')
    wsserver.server = webserver.server;
  } else {
    console.log('Web socket will be attached to new Express Server');
    wsserver.server = express().listen(wsserver.port);
    wsserver.server.on('listening', listenCallBack);
    wsserver.server.on('error', listenCallBack);
  }

  const sio = io(wsserver.server);
  
  wsserver.io = sio;
  require('./events')(sio);
}

wsserver.start = start;

module.exports.wsserver = wsserver
