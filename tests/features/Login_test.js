Feature('로그인 - 고객은 자신임을 증명하기 위해 로그인할 수 있다.');

// Given
Before(({ I }) => {
  I.setupUser();

  I.amOnPage('/');
  I.click('로그인');
});

Scenario('로그인 성공', ({ I }) => {
  // When
  // TODO: fillField 변경
  I.fillField('아이디', 'test123');
  I.fillField('비밀번호', 'Password1234!');

  I.click('로그인하기');

  // Then
  I.waitForText('아이템을 전하세요');
  I.see('내 잔액: 50,000원');
  I.see('로그아웃');
});

Scenario('로그인 에러(잘못 입력 시)', ({ I }) => {
  // When
  I.fillField('아이디', 'test');
  I.fillField('비밀번호', 'Password1234!');

  I.click('로그인하기');

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('로그인 에러(아이디 미입력 시)', ({ I }) => {
  // When
  I.fillField('아이디', '');
  I.fillField('비밀번호', 'Password1234!');

  I.click('로그인하기');

  // Then
  I.waitForText('아이디를 입력해주세요');
});

Scenario('로그인 에러(비밀번호 미입력 시)', ({ I }) => {
  // When
  I.fillField('아이디', 'test123');
  I.fillField('비밀번호', '');

  I.click('로그인하기');

  // Then
  I.waitForText('비밀번호를 입력해주세요');
});
