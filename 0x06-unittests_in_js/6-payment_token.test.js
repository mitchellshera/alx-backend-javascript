const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a successful response for success=true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify that the response is as expected
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done(); // Call done to signal the end of the async test
      })
      .catch((error) => {
        // If the promise is rejected, fail the test
        done(error);
      });
  });

});
