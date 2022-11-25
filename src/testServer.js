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

  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const { userName, password } = await req.json();

    if (userName === 'test123' && password === 'Password1234!') {
      return res(ctx.json({
        accessToken: 'ACCESS.TOKEN',
        name: '김토끼',
        amount: 50_000,
      }));
    }

    return res(context.status(400));
  }),

  rest.post(`${baseUrl}/sesstion`, async (req, res, ctx) => {
    const { userName, password } = await req.json();
    if (userName === 'test123' && password === 'Password!123') {
      return res(ctx.json({
        accessToken: 'ACCESS.TOKEN',
        name: '배준형',
        amount: 50_000,
      }));
    }

    if (userName === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: '아이디를 입력해주세요',
        }),
      );
    }

    if (!password) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: '비밀번호를 입력해주세요',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.post(`${baseUrl}/user`, async (req, res, ctx) => {
    const {
      name, userName, password, confirmPassword,
    } = await req.json();

    if (name === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            1000: '이름을 입력해주세요',
          },
        }),
      );
    }

    if (userName === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            1001: '아이디를 입력해주세요',
          },
        }),
      );
    }

    if (password === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            1002: '비밀번호를 입력해주세요',
          },
        }),
      );
    }

    if (confirmPassword === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            1003: '비밀번호를 입력해주세요',
          },
        }),
      );
    }

    if (password !== confirmPassword) {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            1008: '비밀번호가 일치하지 않습니다',
          },
        }),
      );
    }

    return res(ctx.json({ name }));
  }),

  rest.get(`${baseUrl}/orders`, async (req, res, ctx) => {
    const page = await req.url.searchParams.get('page');

    if (page === '1') {
      return res(ctx.json({
        orders: {
          content: [
            {
              id: 1,
              maker: '농심',
              name: '신라면',
              purchaseCount: 3,
              purchasePrice: 3000,
              receiver: '배준형',
              address: '인천',
              messageToSend: '맛있게 먹어',
              createdAt: '2022-10-21',
            },
            {
              id: 2,
              maker: '과일농장',
              name: '사과 1박스',
              purchaseCount: 3,
              purchasePrice: 60000,
              receiver: '산토끼',
              address: '뒷산',
              messageToSend: '안녕',
              createdAt: '2022-10-21',
            },
          ],
        },
        totalPageCount: 1,
      }));
    }

    return res(context.status(400));
  }),

  rest.get(`${baseUrl}/orders/1`, async (req, res, ctx) => res(ctx.json({
    id: 1,
    maker: '농심',
    name: '신라면 1박스',
    purchaseCount: 2,
    purchasePrice: 30000,
    receiver: '배준형',
    address: '인천',
    messageToSend: '맛있게 먹어',
    createdAt: '2022-10-21',
  }))),

  rest.post(`${baseUrl}/order`, async (req, res, ctx) => {
    const {
      productId,
      purchaseCount,
      purchasePrice,
      receiver,
      address,
      messageToSend,
    } = await req.json();

    if (receiver === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            2000: '성함을 입력해주세요',
          },
        }),
      );
    }

    if (address === '') {
      return res(
        ctx.status(400),
        ctx.json({
          errorCodesAndMessages: {
            2001: '주소를 입력해주세요',
          },
        }),
      );
    }

    return res(
      ctx.json(
        data,
      ),
    );
  }),
);

export default server;
