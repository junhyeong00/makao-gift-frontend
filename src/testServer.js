/* eslint-disable import/no-extraneous-dependencies */

import { context, rest } from 'msw';

import { setupServer } from 'msw/node';

import config from '../config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => {
    const page = await req.url.searchParams.get('page');

    if (page === '1') {
      return res(ctx.json({
        products: {
          content: [
            {
              id: 1, maker: '제조사 1', name: '상품 1', price: 500, description: '좋다',
            },
            {
              id: 2, maker: '제조사 2', name: '상품 2', price: 1000, description: '좋다',
            },
            {
              id: 3, maker: '제조사 3', name: '상품 3', price: 5000, description: '좋다',
            },
            {
              id: 4, maker: '제조사 4', name: '상품 4', price: 500, description: '좋다',
            },
            {
              id: 5, maker: '제조사 5', name: '상품 5', price: 1000, description: '좋다',
            },
            {
              id: 6, maker: '제조사 6', name: '상품 6', price: 5000, description: '좋다',
            },
            {
              id: 7, maker: '제조사 7', name: '상품 7', price: 500, description: '좋다',
            },
            {
              id: 8, maker: '제조사 8', name: '상품 8', price: 1000, description: '좋다',
            },
          ],
        },
        totalPageCount: 2,
      }));
    }

    if (page === '2') {
      return res(ctx.json({
        products: {
          content: [
            {
              id: 9, maker: '제조사 9', name: '상품 9', price: 5000, description: '좋다',
            },
          ],
        },
        totalPageCount: 2,
      }));
    }

    return res(context.status(400));
  }),

  rest.get(`${baseUrl}/products/1`, async (req, res, ctx) => res(ctx.json(
    {
      id: 1, maker: '제조사 1', name: '상품 1', price: 500, description: '좋다',
    },
  ))),
);

export default server;
