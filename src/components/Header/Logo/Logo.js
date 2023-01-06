import React from 'react';
import PropTypes from 'prop-types';

function Logo(props) {
  return (
    <a className='navbar-brand' href='/'>
        <img src='./img/header-logo.png' alt='Bosa Noga'/>
    </a>
  )
}

Logo.propTypes = {
    props: PropTypes.any,
}

export default Logo
