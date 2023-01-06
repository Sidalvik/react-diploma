import React from 'react';
import PropTypes from 'prop-types';
import './Preloader.css';

function Preloader(props) {
  return (
    <div className='preloader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

Preloader.propTypes = {
    props: PropTypes.any,
}

export default Preloader
