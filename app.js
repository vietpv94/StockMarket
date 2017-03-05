const async = require('async');

function startWebserver() {
  require('./backend/webserver').webserver.start((err) => {
    if (err) {
      console.log('Error:', 'Something went wrong on server!');
      console.log('Throwing:' + err);
    }
  });
}

function startWsserver() {
  require('./backend/wsserver').wsserver.start(3000, (err) => {
    if (err) {
      console.log('Error:', 'Something went wrong on socket server!');
      console.log('Throwing:' + err);
    }
  });
}

async.parallel([startWebserver, startWsserver], (err, result) => {
  if (err) {
    console.error('Fatal error: %s', err);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
  console.log(result);
});
