// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');

// Debug Module, if DEBUG=true nodemon src/server.js console.log will be ON
exports.debug = (msg, obj, error, stat) => {
  var status = stat;
  if (!(stat === 'log' || stat === 'warning' || stat === 'error')) {
    status = 'log';
  }

  var err = error;
  if (!error) {
    err = 'no errors';
  }

  var state = status;
  const date = new Date();
  if (process.env.DEBUG) {
    if (state === 'error') {
      console.error(colors.inverse(date), colors.red(msg), obj, err);
    } else if (state === 'warning') {
      // Console logging data
      console.warn(colors.inverse(date), colors.bgYellow(msg), obj);
    } else {
      console.log(colors.inverse(date), colors.green(msg), obj);
    } // child if
    return state;
  } // parent if
}; // exports


// version bump tool
exports.versionBump = (version, pos) => {
  var position = pos;
  if (!(pos === 'patch' || pos === 'minor' || pos === 'major')) {
    position = 'patch';
  }

  const currentVersion = version.split('.');

  const oldMajor = parseInt(currentVersion[0]);
  const oldMinor = parseInt(currentVersion[1]);
  const oldPatch = parseInt(currentVersion[2]);

  var newMajor = 0;
  var newMinor = 0;
  var newPatch = 0;

  if (position === 'major') {
    newMajor = oldMajor + 1;
  } else if (position === 'minor') {
    newMajor = oldMajor;
    newMinor = oldMinor + 1;
  } else if (position === 'patch') {
    newMajor = oldMajor;
    newMinor = oldMinor;
    newPatch = oldPatch + 1;
  } else {
    newMajor = oldMajor;
    newMinor = oldMinor;
    newPatch = oldPatch;
    process.stdout.write('Either you have a type-o or you for got to add what position to bump up.\npositions options ["major", "minor", "patch"]');
  }

  process.stdout.write(newMajor + '.' + newMinor + '.' + newPatch);
  return newMajor + '.' + newMinor + '.' + newPatch;
}
