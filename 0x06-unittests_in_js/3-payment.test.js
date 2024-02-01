const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Ensure calculateNumberSpy was called with the correct arguments
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    // Ensure consoleLogSpy was called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));

    // Restore the spies to their original state
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
