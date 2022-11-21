/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async fetchProducts(page) {
    const url = `${baseUrl}/products`;
    const { data } = await axios.get(url, {
      params: { page },
    });
    return {
      products: data.products.content,
      totalPageCount: data.totalPageCount,
    };
  }

  async fetchProduct(id) {
    const url = `${baseUrl}/products/${id}`;
    const { data } = await axios.get(url);

    return data;
  }

  async postSession({ userName, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { userName, password });
    const { accessToken, name, amount } = data;

    return { accessToken, name, amount };
  }

  async order({
    productId,
    purchaseCount,
    purchasePrice,
    receiver,
    address,
    messageToSend,
  }) {
    const url = `${baseUrl}/order`;
    const { data } = await axios.post(url, {
      productId,
      purchaseCount,
      purchasePrice,
      receiver,
      address,
      messageToSend,
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    console.log(data);

    return data;
  }

  async fetchUserAmount() {
    const url = `${baseUrl}/user/amount`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return data.amount;
  }
}

export const apiService = new ApiService();
