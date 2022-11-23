Feature('주문 목록 확인 - 고객은 자신이 선물한 이력을 확인하기 위해 주문 목록을 확인할 수 있다.');

Before(({ I }) => {
  I.setupUser();
  I.setupProducts();

  I.amOnPage('/');
});

Scenario('로그인이 되어있지 않은 경우', ({ I }) => {
  // When
  I.click('주문조회');

  // Then
  I.see('USER LOGIN');
});

Scenario('주문내역이 없는 경우', ({ I }) => {
  // Given
  I.login('test123', 'Password1234!');
  I.amOnPage('/');

  // When
  I.click('주문조회');

  // Then
  I.waitForText('내가 주문한 내역이 없습니다');
});

Scenario('주문내역이 있는 경우', ({ I }) => {
  // Given
  I.setupOrders();
  I.login('test123', 'Password1234!');
  I.amOnPage('/');

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역입니다');
});
