import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();

    this.product = {};
    this.purchaseCount = 1;
    this.purchasePrice = 0;
    this.receiver = '';
    this.address = '';
    this.messageToSend = '';

    this.errorMessages = {};
  }

  initialize({ product, purchaseCount, purchasePrice }) {
    this.product = product;
    this.purchaseCount = purchaseCount;
    this.purchasePrice = purchasePrice;
    this.receiver = '';
    this.address = '';
    this.messageToSend = '';
    this.errorMessages = {};
    this.publish();
  }

  async order() {
    try {
      const data = await apiService.order({
        productId: this.product.id,
        purchaseCount: this.purchaseCount,
        purchasePrice: this.purchasePrice,
        receiver: this.receiver,
        address: this.address,
        messageToSend: this.messageToSend,
      });
      this.errorMessages = {};
      return data;
    } catch (error) {
      const { errorMessages } = error.response.data;
      this.errorMessages = errorMessages;
      this.publish();
      return '';
    }
  }

  changeReceiver(receiver) {
    this.receiver = receiver;
    this.publish();
  }

  changeAddress(address) {
    this.address = address;
    this.publish();
  }

  changeMessage(message) {
    if (message.length > 100) {
      return;
    }
    this.messageToSend = message;
    this.publish();
  }
}

export const orderStore = new OrderStore();
