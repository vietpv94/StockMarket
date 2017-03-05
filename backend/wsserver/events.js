'use strict';

const dataservice = require('../core/dataservice');

const CLIENT_VALUE_UPDATE_EVENT = 'client on update value event';
const SERVER_VALUE_UPDATE_EVENT = 'server on update value event';
const CLIENT_VOLUME_UPDATE_EVENT = 'client on update volume event';
const SERVER_VOLUME_UPDATE_EVENT = 'server on update volume event';
const SERVER_INIT_DATA = 'server initial data'

const initialData = dataservice.initData();

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit(SERVER_INIT_DATA, initialData);
    socket.on(CLIENT_VALUE_UPDATE_EVENT, (values) => {
      console.log('Have an update on values of stock!');
    });

    socket.on(SERVER_VOLUME_UPDATE_EVENT, (volumes) => {
      console.log('Have an update on volumes of stock!');
    });
  });
}
