
const expect = require('chai').expect;
console.log(__filename);
const versionBump = require('../versionBumper/versionBump');

const currentVersion = require('../package.json').version;
const currentVersionArray = currentVersion.split('.');
const oldMajor = parseInt(currentVersionArray[0]);
const oldMinor = parseInt(currentVersionArray[1]);
const oldPatch = parseInt(currentVersionArray[2]);
// turn on debug mode for these tests
process.env.DEBUG = true;
describe('version bump feature', () => {
  it('major version bump', (done) => {

    const newVersion = versionBump('major');
    const newVersionArray = newVersion.split('.');
    const newMajor = parseInt(newVersionArray[0]);
    const newMinor = parseInt(newVersionArray[1]);
    const newPatch = parseInt(newVersionArray[2]);
    expect(oldMajor).to.be.below(newMajor);
    done();
  });

  it('minor version bump', (done) => {

    const newVersion = versionBump('minor');
    const newVersionArray = newVersion.split('.');
    const newMajor = parseInt(newVersionArray[0]);
    const newMinor = parseInt(newVersionArray[1]);
    const newPatch = parseInt(newVersionArray[2]);
    expect(oldMinor).to.be.below(newMinor);
    done();
  });

  it('patch version bump', (done) => {

    const newVersion = versionBump('patch');
    const newVersionArray = newVersion.split('.');
    const newMajor = parseInt(newVersionArray[0]);
    const newMinor = parseInt(newVersionArray[1]);
    const newPatch = parseInt(newVersionArray[2]);
    expect(oldPatch).to.be.below(newPatch);
    done();
  });
});
