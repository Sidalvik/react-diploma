import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

function Banner(props) {
  const bannerContent = {
    src: '/img/banner.jpg',
    title: 'К весне готовы!',
  }

  return (
    <div className='banner'>
        <img src={bannerContent.src} className='img-fluid' alt={bannerContent.title}/>
        <h2 className='banner-header'>{bannerContent.title}</h2>
    </div>
  )
}

Banner.propTypes = {
    props: PropTypes.any,
}

export default Banner
