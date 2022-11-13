const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  return actor({
    setupDatabase() {
      this.amOnPage(`${backdoorBaseUrl}/setup-database`);
    },
  });
};
