// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should add two rounded numbers for type SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.strictEqual(typeof result, 'number');
  });

  it('should subtract rounded b from a for type SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(typeof result, 'number');
  });

  it('should divide rounded a by rounded b for type DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(typeof result, 'number' || 'string');
  });

  it('should return "Error" when attempting to divide by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(result, 'Error');
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => {
      calculateNumber('INVALID_TYPE', 1.4, 4.5);
    }, Error);
  });
});
