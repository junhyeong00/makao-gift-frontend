/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';

import { setupServer } from 'msw/node';

import config from '../config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => res(ctx.json({
    products: [
      {
        id: 1, maker: '제조사 1', name: '옵션 1', price: 500, description: '좋다',
      },
      {
        id: 2, maker: '제조사 2', name: '옵션 2', price: 1000, description: '좋다',
      },
      {
        id: 3, maker: '제조사 3', name: '옵션 3', price: 5000, description: '좋다',
      },
    ],
  }))),
);

export default server;
