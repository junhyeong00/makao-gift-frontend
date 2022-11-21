import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.product = {};
    this.selectedCount = 1;
    this.totalPrice = 0;
  }

  async fetchProduct(productId) {
    this.product = await apiService.fetchProduct(productId);
    this.selectedCount = 1;
    this.totalPrice = this.product.price;
    this.publish();
  }

  addCount() {
    this.selectedCount += 1;
    this.totalPrice += this.product.price;
    this.publish();
  }

  reduceCount() {
    this.selectedCount -= 1;
    this.totalPrice -= this.product.price;
    this.publish();
  }
}

export const productStore = new ProductStore();
