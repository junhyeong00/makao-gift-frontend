Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메세지를 자세히 알기 위해 주문 세부 정보를 확인할 수 있다. ');

Scenario('주문 내역을 클릭한다', ({ I }) => {
  // Given
  I.setupProducts();
  I.setupUser();
  I.setupOrders();

  I.amOnPage('/');

  I.login('test123', 'Password1234!');

  I.click('주문조회');

  // When
  // TODO: 상품 클릭

  // Then
  // TODO: 상품 정보 확인
});
