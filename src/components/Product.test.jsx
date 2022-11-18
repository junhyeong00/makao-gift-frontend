import {
  fireEvent, render, screen,
} from '@testing-library/react';

import Product from './Product';

describe('Product', () => {
  const handleClickAddCount = jest.fn();
  const handleClickMinusCount = jest.fn();

  function renderProduct({
    product, selectedCount, totalPrice,
  }) {
    render((
      <Product
        product={product}
        selectedCount={selectedCount}
        totalPrice={totalPrice}
        onClickAddCount={handleClickAddCount}
        onClickMinusCount={handleClickMinusCount}
      />
    ));
  }

  const product = {
    id: 1,
    name: 'nike',
    price: 1_000,
    maker: 'maker',
    description: 'good',
  };

  const selectedCount = 1;
  const totalPrice = product.price * selectedCount;

  it('renders product information', () => {
    renderProduct({ product, selectedCount, totalPrice });

    screen.getByText(/nike/);
    screen.getAllByText(/1,000/);
    screen.getByText(/maker/);
  });

  it('listens for add count button click event', () => {
    renderProduct({ product, selectedCount, totalPrice });

    fireEvent.click(screen.getByText('+'));

    expect(handleClickAddCount).toBeCalled();
  });

  it('listens for minus count button click event', () => {
    renderProduct({ product, selectedCount, totalPrice });

    fireEvent.click(screen.getByText(/-/));

    expect(handleClickMinusCount).not.toBeCalled();
  });
});
