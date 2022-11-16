const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupProducts(count) {
    this.amOnPage(`${backdoorBaseUrl}/setup-products?count=${count}`);
  },
});
