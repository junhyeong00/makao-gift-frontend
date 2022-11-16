import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.totalPageCount = 0;
    this.currentPage = 0;

    this.product = {};
    this.selectedCount = 1;
    this.totalPrice = 0;
  }

  async fetchProducts(page) {
    const { products, totalPageCount } = await apiService.fetchProducts(page);

    this.products = products;

    this.totalPageCount = totalPageCount;
    this.publish();
  }

  async fetchProduct(productId) {
    this.product = await apiService.fetchProduct(productId);
    this.selectedCount = 1;
    this.totalPrice = this.product.price;
    this.publish();
  }

  async changePage(page) {
    this.currentPage = page;

    await this.fetchProducts(page);
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
