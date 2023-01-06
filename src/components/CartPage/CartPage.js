import React from 'react';
import PropTypes from 'prop-types';
import Cart from './Cart/Cart';
import OrderForm from './OrderForm/OrderForm';

function CartPage(props) {
  return (
    <>
        <Cart/>
        <OrderForm/>
    </>
  )
}

CartPage.propTypes = {
    props: PropTypes.any,
}

export default CartPage
