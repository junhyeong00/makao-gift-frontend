Feature('상품 목록 확인 - 고객은 마음에 드는 상품을 고르기 위해 상품 목록을 볼 수 있다. ');

// Given
Before(({ I }) => {
  // I.setupDatabase();

  I.amOnPage('/');
});

Scenario('로그인이 되지 않았을 경우', ({ I }) => {
  // Given
  // TODO: 아이템 세팅

  // When
  I.click('스토어');

  // Then
  I.see('로그인');
  I.see('인기선물을 한 자리에 모았아요');
});

Scenario('아이템이 존재하지 않을 경우', ({ I }) => {
  // When
  I.click('스토어');

  // Then
  I.see('상품이 존재하지 않습니다');
});

Scenario('아이템이 8개 이하로 존재할 경우', ({ I }) => {
  // Given
  // TODO: 아이템 세팅

  // When
  I.click('스토어');

  // Then
  I.see('인기선물을 한 자리에 모았아요');
  // TODO: 6개 아이템 확인
});

Scenario('아이템이 8개 이상 존재할 경우', ({ I }) => {
  // Given
  // TODO: 아이템 세팅

  // When
  I.click('스토어');

  // Then
  I.see('인기선물을 한 자리에 모았아요');
  // TODO: 8개의 아이템을 확인 -> 가장 최신에 생성된 8개 아이템 읽어오기 (desc created_at)
  // TODO: 4개의 페이지를 확인
});
