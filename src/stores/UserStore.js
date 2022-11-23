import { apiService } from '../services/ApiService';

import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';
    this.amount = 0;

    this.loginError = '';

    this.signUpErrors = {};
  }

  async fetchUserAmount() {
    const amount = await apiService.fetchUserAmount();
    this.amount = amount;
    this.publish();
  }

  async login({ userName, password }) {
    try {
      const { accessToken, name, amount } = await apiService.postSession({
        userName, password,
      });

      this.name = name;
      this.amount = amount;

      return accessToken;
    } catch (error) {
      this.loginError = error.response.data.errorMessage;
      this.publish();
      return '';
    }
  }

  async register({
    name, userName, password, confirmPassword,
  }) {
    try {
      const registeredName = await apiService.register({
        name, userName, password, confirmPassword,
      });

      return registeredName;
    } catch (error) {
      this.signUpErrors = error.response.data.errorCodesAndMessages;
      this.publish();
      return '';
    }
  }
}

export const userStore = new UserStore();
