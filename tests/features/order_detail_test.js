Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메세지를 자세히 알기 위해 주문 세부 정보를 확인할 수 있다. ');

Scenario('주문 내역을 클릭한다', ({ I }) => {
  // Given
  I.setupProducts(10);
  I.setupUser();
  I.setupOrders();

  I.amOnPage('/');

  I.login('test123', 'Password1234!');

  I.click('주문조회');

  // When
  I.see('내가 주문한 내역입니다');
  I.click('라운드어라운드 선인장 디퓨저');

  // Then
  I.see('라운드어라운드 선인장 디퓨저');
  I.see('구매수량');
  I.see('구매일');
  I.see('받는 분');
  I.see('산토끼');
  I.see('안녕');
  I.see('36,000원');
});
