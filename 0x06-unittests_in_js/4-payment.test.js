// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    // Stub calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Ensure calculateNumberStub was called with the correct arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Ensure consoleLogSpy was called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));

    // Restore the stub and the spy to their original state
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
