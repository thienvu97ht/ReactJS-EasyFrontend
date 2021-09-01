import PropTypes from 'prop-types';
import React from 'react';
import CartItem from './CartItem';

CartList.propTypes = {
  cartItems: PropTypes.array,
};

function CartList({ cartItems = [] }) {
  return (
    <>
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </>
  );
}

export default CartList;
