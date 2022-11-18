import { apiService } from '../services/ApiService';

import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.name = '';
    this.amount = 0;
  }

  async login({ userName, password }) {
    try {
      const { accessToken, name, amount } = await apiService.postSession({
        userName, password,
      });

      this.name = name;
      this.amount = amount;

      return accessToken;
    } catch (e) {
      return '';
    }
  }
}

export const userStore = new UserStore();
