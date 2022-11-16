Feature('상품 선택 - 고객은 원하는 상품을 친구에게 선물하기 위해 상품과 개수를 선택 하고 주문할 수 있다.');

Before(({ I }) => {
  // TODO: 아이템 세팅
  I.setupDatabase();

  I.amOnPage('/');
  // TODO: 로그인
  I.click('스토어');
  // TODO: 아이템 클릭 - 가격 10000원
});

Scenario('로그인하지 않고 선물하기를 누른 경우', ({ I }) => {
  // When
  I.click('선물하기');

  // Then
  I.see('USER LOGIN');

  // TODO: 로그인시 원래 페이지로 복귀 - 어떻게?
});

Scenario('선물하기 진행', ({ I }) => {
  // When
  I.see('총 상품금액: 10,000원');
  I.click('+');

  I.see('총 상품금액: 20,000원');
  I.click('선물하기');

  // Then
  I.see('받는 분 성함');
});

Scenario('잔액이 부족한 경우', ({ I }) => {
  // Givne
  // TODO: 잔액 500원 세팅

  // When
  I.click('선물하기');

  // Then
  I.see('❌잔액이 부족하여 선물하기가 불가능합니다❌');
});
