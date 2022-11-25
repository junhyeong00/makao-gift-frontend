Feature('상품 선택 - 고객은 원하는 상품을 친구에게 선물하기 위해 상품과 개수를 선택 하고 주문할 수 있다.');

Before(({ I }) => {
  I.setupProducts(10);
  I.setupUser();

  I.amOnPage('/');
});

Scenario('로그인하지 않고 선물하기를 누른 경우', ({ I }) => {
  // Givne
  I.click('스토어');
  I.click('아로마티카 디퓨저 100ml');

  // When
  I.click('선물하기');

  // Then
  I.see('USER LOGIN');
});

Scenario('선물하기 진행', ({ I }) => {
  // Givne
  I.login('test123', 'Password1234!');
  I.amOnPage('/');

  I.click('스토어');
  I.click('아로마티카 디퓨저 100ml');

  // When
  I.see('총 상품금액: 23,000원');
  I.click('+');

  I.see('총 상품금액: 46,000원');
  I.click('선물하기');

  // Then
  I.see('받는 분 성함');
});

Scenario('잔액이 부족한 경우', ({ I }) => {
  // Givne
  I.login('test0000', 'Password1234!');
  I.amOnPage('/');

  I.click('스토어');
  I.click('아로마티카 디퓨저 100ml');

  // When
  I.click('선물하기');

  // Then
  I.see('❌잔액이 부족하여 선물하기가 불가능합니다❌');
});
