(function start() {
  require('./backend/webserver').webserver.start(function(err) {
    if(err) {
      console.log('Error:', 'Something went wrong on server!');
      console.log('Throwing:' + err);
    }
  });
})();
