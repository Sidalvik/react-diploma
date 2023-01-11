import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CART_PAGE as linkToCart} from '../../../../config/links';
import { useSelector } from 'react-redux';


function CartButton(props) {
  // const cartItemsCount = useSelector((state) => state.cart.cartItems.length)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemsCount = cartItems.reduce((totalCount, item) => totalCount + item.count, 0);

  return (
    <Link to={linkToCart()}>
        <div className='header-controls-pic header-controls-cart'>
        {cartItemsCount ? <div className='header-controls-cart-full'>{cartItemsCount}</div> : null}
        <div className='header-controls-cart-menu'></div>
        </div>
    </Link>
  )
}

CartButton.propTypes = {
    props: PropTypes.any,
}

export default CartButton
