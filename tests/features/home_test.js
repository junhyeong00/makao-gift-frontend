Feature('home');

Scenario('홈페이지 접속 - (로그인 전)', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see('특별한 아이템을 전하세요');

  I.see('홈');
  I.see('스토어');
  I.see('주문조회');

  I.see('회원가입');
  I.see('로그인');
});

Scenario('홈페이지 접속 - (로그인 후)', ({ I }) => {
  // Given
  I.setupDatabase();

  // When
  I.amOnPage('/');

  // Then
  I.see('특별한 아이템을 전하세요');

  I.see('홈');
  I.see('스토어');
  I.see('주문조회');

  I.see('내 잔액: 50000원');
  I.see('로그아웃');
});
