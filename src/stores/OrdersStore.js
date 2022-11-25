import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrdersStore extends Store {
  constructor() {
    super();

    this.orders = [];
    this.totalPageCount = 0;
    this.currentPage = 0;
  }

  async fetchOrders(page) {
    const { orders, totalPageCount } = await apiService.fetchOrders(page);

    this.orders = orders;

    this.totalPageCount = totalPageCount;
    this.publish();
  }

  async changePage(page) {
    this.currentPage = page;

    await this.fetchOrders(page);
    this.publish();
  }
}

export const ordersStore = new OrdersStore();
