Feature('상품 주문 - 고객은 상품을 친구에게 보내기 위해 주문을 완료 할 수 있다.');

Before(({ I }) => {
  I.setupUser();
  I.setupProducts(10);

  I.amOnPage('/');
  I.login('test123', 'Password1234!');

  I.click('스토어');
  I.click('포맨트 시그니처 퍼퓸');
  I.click('선물하기');
});

Scenario('선물하기 완료', ({ I }) => {
  // When
  I.fillField('받는 분 성함*', '제임스');
  I.fillField('받는 분 주소*', '뉴욕');
  I.fillField('받는 분께 보내는 메세지', '생축');

  I.click('button[type="submit"]');

  // Then
  I.see('내가 주문한 내역입니다');
});

Scenario('내용이 빈칸인 경우', ({ I }) => {
  // When
  I.fillField('받는 분 성함*', '');
  I.fillField('받는 분 주소*', '');
  I.fillField('받는 분께 보내는 메세지', '');

  I.click('button[type="submit"]');

  // Then
  I.see('성함을 입력해주세요');
  I.see('주소를 입력해주세요');
});
