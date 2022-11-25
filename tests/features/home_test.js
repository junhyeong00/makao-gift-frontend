Feature('home');

Scenario('홈페이지 접속 - (로그인 전)', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see('특별한');
  I.see('아이템을 전하세요');

  I.see('홈');
  I.see('스토어');
  I.see('주문조회');

  I.see('회원가입');
  I.see('로그인');
});

Scenario('홈페이지 접속 - (로그인 후)', ({ I }) => {
  // Given
  I.setupUser();
  I.login('test123', 'Password1234!');

  // When
  I.amOnPage('/');

  // Then
  I.see('특별한');
  I.see('아이템을 전하세요');

  I.see('홈');
  I.see('스토어');
  I.see('주문조회');

  I.see('로그아웃');
});
