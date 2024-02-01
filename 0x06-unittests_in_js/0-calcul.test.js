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
  it('should round and return the sum for positive integer values', () => {
    assert.strictEqual(calculateNumber(5, 8), 13);
  });

  it('should round and return the sum for negative integer values', () => {
    assert.strictEqual(calculateNumber(-2, -3), -5);
  });

  it('should round and return the sum for zero and positive decimal value', () => {
    assert.strictEqual(calculateNumber(0, 3.3), 3);
  });

  it('should round and return the sum for negative decimal values', () => {
    assert.strictEqual(calculateNumber(-1.7, -2.5), -4);
  });

  it('should round and return the sum for zero and negative decimal value', () => {
    assert.strictEqual(calculateNumber(0, -2.8), -3);
  });

  it('should round and return the sum for zero and zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
});

  it('should round and return the sum for larger decimal values', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
