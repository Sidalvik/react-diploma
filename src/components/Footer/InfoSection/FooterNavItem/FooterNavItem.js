import React from 'react';
import PropTypes from 'prop-types';

function FooterNavItem(props) {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

FooterNavItem.propTypes = {
    props: PropTypes.any,
}

export default FooterNavItem
