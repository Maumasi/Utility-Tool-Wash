const fs = require('fs');
// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');

// Debug Module, if DEBUG=true nodemon src/server.js console.log will be ON
module.exports = (msg, obj, err = null, status = 'log') => {
  let state = status;
  const date = new Date();
  if (process.env.DEBUG) {
    if (err) {
      console.log('err was an error');
      state = 'error';
      console.error(date.inverse, msg.bgYellow, err);
    } else if (state === 'warning') {
      // Console logging data
      console.warn(date.inverse, msg.bgYellow, obj, err);
    } else {
      console.log(date.inverse, msg.bgYellow, obj, err);
    } // child if
    return state;
  } // parent if
}; // exports

const version = require('./versionBumper/versionbump');
version('minor');
