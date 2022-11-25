Feature('상품 목록 확인 - 고객은 마음에 드는 상품을 고르기 위해 상품 목록을 볼 수 있다. ');

// Given
Before(({ I }) => {
  // I.setupDatabase();
});

Scenario('로그인이 되지 않았을 경우', ({ I }) => {
  // Given
  I.setupProducts(10);
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('로그인');
  I.see('아티산 EDT');
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

Scenario('아이템이 8개 이하로 존재할 경우(5개)', ({ I }) => {
  // Given
  I.setupProducts(5);
  I.amOnPage('/');

  // When
  I.click('스토어');

  // Then
  I.see('아티산 EDT');
  I.see('존바바토스');
  I.see('38,000원');
  I.see('그라펜 타추 퍼퓸');
  I.see('46,500원');
});

Scenario('아이템이 8개 이상 존재할 경우(10개) - 2페이지 클릭', ({ I }) => {
  // Given
  I.setupProducts(10);
  I.amOnPage('/');

  // When
  I.click('스토어');
  I.click('2');

  // Then
  I.see('더블유드레스룸');
  I.see('8,000원');
  I.see('라이프 퍼퓸백');
});
