var expect = require('chai').expect;

var myEvery = require('../index').myEvery;

describe('function myEvery in recursive', function() {

  it('No array should return true', function() {
    expect(myEvery()).to.be.true;
  });

  it('Empty array should return true', function() {
    expect(myEvery([])).to.be.true;
  });

  it('Array with 1 element false should return false', function() {
    expect(myEvery([false])).to.be.false;
  });

  it('Array with 1 element true should return true', function() {
    expect(myEvery([true])).to.be.true;
  });

  it('Array with 2 elements true & false should return false', function() {
    expect(myEvery([true, false])).to.be.false;
  });

});