import UserStore from './UserStore';

const context = describe;

describe('UserStore', () => {
  let userStore;

  beforeEach(() => {
    userStore = new UserStore();
  });

  describe('login', () => {
    context('올바른 아이디와 비밀번호를 입력했을 경우', () => {
      it('아이디 정보를 불러옴', async () => {
        await userStore.login({ userName: 'test123', password: 'Password1234!' });

        expect(userStore.amount).toBe(50_000);
      });
    });

    context('아이디가 틀렸을 경우', () => {
      it('정보를 불러오지 못한다.', async () => {
        await userStore.login({ userName: 'xxx', password: 'Password1234!' });

        expect(userStore.name).toBeFalsy();
        expect(userStore.amount).toBe(0);
      });
    });

    context('비밀번호가 틀렸을 경우', () => {
      it('정보를 불러오지 못한다.', async () => {
        await userStore.login({ userName: 'test123', password: 'xxx' });

        expect(userStore.name).toBeFalsy();
        expect(userStore.amount).toBe(0);
      });
    });
  });

  describe('register', () => {
    context('회원가입이 성공할 경우', () => {
      it('회원가입시 입력한 이름을 불러온다', async () => {
        await userStore.register({
          name: '배준형', userName: 'test123', password: 'Password1234!', confirmPassword: 'Password1234!',
        });

        expect(userStore.name).toBe('배준형');
      });
    });

    context('이름을 입력하지 않았을 경우', () => {
      it('회원가입에 실패한다.', async () => {
        await userStore.register({
          name: '', userName: 'test123', password: 'Password1234!', confirmPassword: 'Password1234!',
        });

        expect(userStore.signUpErrors[1000]).toBe('이름을 입력해주세요');
      });
    });

    context('아이디를 입력하지 않았을 경우', () => {
      it('회원가입에 실패한다.', async () => {
        await userStore.register({
          name: '배준형', userName: '', password: 'Password1234!', confirmPassword: 'Password1234!',
        });

        expect(userStore.signUpErrors[1001]).toBe('아이디를 입력해주세요');
      });
    });

    context('비밀번호를 입력하지 않았을 경우', () => {
      it('회원가입에 실패한다.', async () => {
        await userStore.register({
          name: '배준형', userName: 'test123', password: '', confirmPassword: 'Password1234!',
        });

        expect(userStore.signUpErrors[1002]).toBe('비밀번호를 입력해주세요');
      });
    });

    context('확인 비밀번호를 입력하지 않았을 경우', () => {
      it('회원가입에 실패한다.', async () => {
        await userStore.register({
          name: '배준형', userName: 'test123', password: 'Password1234!', confirmPassword: '',
        });

        expect(userStore.signUpErrors[1003]).toBe('비밀번호를 입력해주세요');
      });
    });

    context('확인 비밀번호를 입력하지 않았을 경우', () => {
      it('회원가입에 실패한다.', async () => {
        await userStore.register({
          name: '배준형', userName: 'test123', password: 'Password1234!', confirmPassword: 'xxx',
        });

        expect(userStore.signUpErrors[1008]).toBe('비밀번호가 일치하지 않습니다');
      });
    });
  });
});
