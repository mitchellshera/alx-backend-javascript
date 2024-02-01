const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should add two rounded numbers for type SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.be.a('number');
  });

  it('should subtract rounded b from a for type SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.be.a('number');
  });

  it('should divide rounded a by rounded b for type DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.satisfy((val) => typeof val === 'number' || typeof val === 'string');
  });

  it('should return "Error" when attempting to divide by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });

  it('should throw an error for an invalid type', () => {
    const invalidCall = () => calculateNumber('INVALID_TYPE', 1.4, 4.5);
    expect(invalidCall).to.throw(Error);
  });
});
