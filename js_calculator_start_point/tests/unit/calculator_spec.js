var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add', function(){
    calculator.previousTotal = 5
    calculator.add(3);
    assert.equal(calculator.runningTotal, 8)
  });

  it('should be able to subtract', function(){
    calculator.previousTotal = 6
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, 4)
  });

  it('should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(4);
    assert.equal(calculator.runningTotal, 12);
  });

  it('should be able to divide', function(){
    calculator.previousTotal = 6
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 3);
  });


});
