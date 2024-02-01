// 5-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is logging the correct string
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should call sendPaymentRequestToApi with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is logging the correct string
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
