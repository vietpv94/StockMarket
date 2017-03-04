'use strict';

module.exports = (io) => {
  io.on('connection', () => {
    console.log('Got a connection');;
  });
}
