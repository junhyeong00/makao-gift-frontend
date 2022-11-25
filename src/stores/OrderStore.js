import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();

    this.order = {};
  }

  async fetchOrder(id) {
    this.order = await apiService.fetchOrder(id);
    this.publish();
  }
}

export const orderStore = new OrderStore();
