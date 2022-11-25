const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupProducts(count) {
    this.amOnPage(`${backdoorBaseUrl}/setup-products?count=${count}`);
  },

  setupUser() {
    this.amOnPage(`${backdoorBaseUrl}/setup-user`);
  },

  setupOrders() {
    this.amOnPage(`${backdoorBaseUrl}/setup-orders`);
  },

  login(userName, password) {
    this.amOnPage('/login');

    this.fillField({ id: 'input-userName' }, userName);
    this.fillField({ id: 'input-password' }, password);

    this.click('로그인하기');

    this.waitForText('로그아웃');
  },
});
