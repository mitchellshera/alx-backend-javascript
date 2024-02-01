// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and return the sum for integer values', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum for one decimal value', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return the sum for both decimal values', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return the sum for larger decimal values', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
