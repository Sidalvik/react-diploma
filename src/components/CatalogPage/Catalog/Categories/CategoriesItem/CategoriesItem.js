import React from 'react';
import PropTypes from 'prop-types';

function CategoriesItem(props) {
  return (
    <li className='nav-item'>
        {props.children}
    </li>
  )
}

CategoriesItem.propTypes = {
    props: PropTypes.any,
}

export default CategoriesItem
