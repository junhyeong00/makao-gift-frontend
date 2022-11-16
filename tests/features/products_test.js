Feature('상품 목록 확인 - 고객은 마음에 드는 상품을 고르기 위해 상품 목록을 볼 수 있다. ');

// Given
Before(({ I }) => {
  // I.setupDatabase();
});

Scenario('로그인이 되지 않았을 경우', ({ I }) => {
  // Given
  I.setupProducts(20);
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('로그인');
  I.see('제조사 1');
});

Scenario('아이템이 존재하지 않을 경우', ({ I }) => {
  // Given
  I.setupProducts(0);
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('상품이 존재하지 않습니다');
});

Scenario('아이템이 8개 이하로 존재할 경우(6개)', ({ I }) => {
  // Given
  I.setupProducts(6);
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('제조사 1');
  I.see('제조사 2');
  I.see('제조사 3');
  I.see('제조사 4');
  I.see('제조사 5');
  I.see('제조사 6');
});

Scenario('아이템이 8개 이상 존재할 경우(30개) - 4페이지 클릭', ({ I }) => {
  // Given
  I.setupProducts(30);
  I.amOnPage('/');

  // When
  I.click('스토어');
  I.click('4');

  // Then
  I.see('제조사 30');
  I.see('3,000원');
  I.see('상품 30');
});
