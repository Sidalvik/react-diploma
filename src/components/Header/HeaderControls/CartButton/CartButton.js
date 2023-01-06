import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {CART_PAGE as linkToCart} from '../../../../config/links';

function CartButton(props) {
  return (
    <NavLink to={linkToCart()}>
        <div className='header-controls-pic header-controls-cart'>
        {1 && <div className='header-controls-cart-full'>{1}</div>}
        <div className='header-controls-cart-menu'></div>
        </div>
    </NavLink>
  )
}

CartButton.propTypes = {
    props: PropTypes.any,
}

export default CartButton
