Feature('상품 선택 - 고객은 원하는 상품을 친구에게 선물하기 위해 상품과 개수를 선택 하고 주문할 수 있다.');

Before(({ I }) => {
  I.setupProducts();
  I.setupUser();

  I.amOnPage('/');
});

Scenario('로그인하지 않고 선물하기를 누른 경우', ({ I }) => {
  // Givne
  I.click('스토어');
  I.click('상품 1');

  // When
  I.click('선물하기');

  // Then
  I.see('USER LOGIN');

  // TODO: 로그인시 원래 페이지로 복귀 - 어떻게?
});

Scenario('선물하기 진행', ({ I }) => {
  // Givne
  I.login('test123', 'Password1234!');
  I.amOnPage('/');

  I.click('스토어');
  I.click('상품 1');

  // When
  I.see('총 상품금액: 100원');
  I.click('+');

  I.see('총 상품금액: 200원');
  I.click('선물하기');

  // Then
  I.see('받는 분 성함');
});

Scenario('잔액이 부족한 경우', ({ I }) => {
  // Givne
  I.login('test0000', 'Password1234!');
  I.amOnPage('/');

  I.click('스토어');
  I.click('상품 1');

  // When
  I.click('선물하기');

  // Then
  I.see('잔액이 부족하여 선물하기가 불가능합니다');
});
