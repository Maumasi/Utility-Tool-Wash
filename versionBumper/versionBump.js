
const package = require('../package.json');

const currentVersion = package.version.split('.');

const oldMajor = parseInt(currentVersion[0]);
const oldMinor = parseInt(currentVersion[1]);
const oldPatch = parseInt(currentVersion[2]);

module.exports = (position = 'patch') => {
  let newMajor = 0;
  let newMinor = 0;
  let newPatch = 0;

  if (position === 'major') {
    newMajor = oldMajor + 1;
    newMinor = oldMinor;
    newPatch = oldPatch;

  } else if (position === 'minor') {
    newMajor = oldMajor;
    newMinor = oldMinor + 1;
    newPatch = oldPatch;
  } else if (position === 'patch') {
    newMajor = oldMajor;
    newMinor = oldMinor;
    newPatch = oldPatch + 1;
  } else {
    const newMajor = oldMajor;
    const newMinor = oldMinor;
    const newPatch = oldPatch;
    process.stdout.write('Either you have a type-o or you for got to add what position to bump up.\npositions options ["major", "minor", "patch"]');
  }

  process.stdout.write(newMajor + '.' + newMinor + '.' + newPatch);
  return newMajor + '.' + newMinor + '.' + newPatch;
}
