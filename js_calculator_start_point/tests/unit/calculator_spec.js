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
    calculator.previousTotal = 1
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  });

  it('should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  });

  it('should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it('should be able to divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should have working number buttons', function(){
    calculator.numberClick(2)
    calculator.numberClick(4)
    calculator.numberClick(3)
    assert.equal(calculator.runningTotal, 243);
  });

  it('should have working operator buttons +', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 7)
  });

  it('should have working operator buttons -', function(){
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  });

  it('should have working operator buttons *', function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10)
  });

  it('should have working operator buttons /', function(){
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 2.5)
  });

  it('should have working operator buttons, multiple used', function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15)

  });

  it('should have working clear button', function(){
    calculator.numberClick(5)
    calculator.numberClick(7)
    calculator.numberClick(9)
    assert.equal(calculator.runningTotal, 579)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  });

  it('should return Error when dividing by 0', function(){
      calculator.numberClick(5)
      calculator.operatorClick('/')
      calculator.numberClick(0)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, "Error")
  });



});
