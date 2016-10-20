
const expect = require('chai').expect;
const debug = require('../debug').debug;

// turn on debug mode for these tests
process.env.DEBUG = true;
describe('debug log tool tests', () => {
  // Read url by id
  it('debug should return "log" when using console.log()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const log = debug('make a nowmal log', null, null);
    expect(log).to.equal('log');
    done();
  });

  it('debug should return "warn" when using console.warn()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const log = debug('force a warning', null, null, 'warn');
    expect(log).to.equal('warn');
    done();
  });

  it('debug should return "error" when using console.error()', (done) => {
    // const test = remer.debug('this is a log', 'sucess');

    const err = new Error();
    const log = debug('forced an error', null, err);
    expect(log).to.equal('error');
    done();
  });
});
