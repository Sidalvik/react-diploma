import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {ROOT_PAGE as root} from '../../../config/links';

function Logo(props) {
  return (
    <NavLink to={root()} className='navbar-brand'>
      <img src='/img/header-logo.png' alt='Bosa Noga'/>
    </NavLink>
  )
}

Logo.propTypes = {
    props: PropTypes.any,
}

export default Logo
