
const expect = require('chai').expect;
console.log(__filename);
const versionBump = require('../versionBumper/versionBump');

const currentVersion = require('../package.json').version;
const oldMajor = currentVersion.charAt(0);
const oldMinor = currentVersion.charAt(2);
const oldPatch = currentVersion.charAt(4);
// turn on debug mode for these tests
process.env.DEBUG = true;
describe('version bump feature', () => {
  it('major version bump', (done) => {

    const newVersion = versionBump('major');
    const newMajor = newVersion.charAt(0);
    const newMinor = newVersion.charAt(2);
    const newPatch = newVersion.charAt(4);
    expect(oldMajor).to.be.below(newMajor);
    done();
  });

  it('minor version bump', (done) => {

    const newVersion = versionBump('minor');
    const newMajor = newVersion.charAt(0);
    const newMinor = newVersion.charAt(2);
    const newPatch = newVersion.charAt(4);
    expect(oldMinor).to.be.below(newMinor);
    done();
  });

  it('patch version bump', (done) => {

    const newVersion = versionBump('patch');
    const newMajor = newVersion.charAt(0);
    const newMinor = newVersion.charAt(2);
    const newPatch = newVersion.charAt(4);
    expect(oldPatch).to.be.below(newPatch);
    done();
  });
});
