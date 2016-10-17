const fs = require('fs');
// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');

// Debug Module, if DEBUG=true nodemon src/server.js console.log will be ON
module.exports = function debugWash(err, msg, obj) {
  const date = new Date();
  if (process.env.DEBUG) {
    if (err) {
      console.log(date.inverse, msg.bgYellow, err);
      fs.appendFile('./logs/debugs.log', `${date} ${msg} ${err} \n`);
    } else {
      // Console logging data
      console.log(date.inverse, msg.bgYellow, obj);

      // Sending Console.log Messages to a Logs/debugs.log file
      JSON.stringify(obj);
      fs.appendFile('./logs/debugs.log', `${date} ${msg} ${JSON.stringify(obj)} \n`);
    } // child if
  } // parent if
}; // exports
