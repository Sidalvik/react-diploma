import React from 'react';
import PropTypes from 'prop-types';
import './SocialLinks.css';

function SocialLinks(props) {
  return (
    <div className='footer-social-links'>
        <div className='footer-social-link footer-social-link-twitter'></div>
        <div className='footer-social-link footer-social-link-vk'></div>
    </div>
  )
}

SocialLinks.propTypes = {
    props: PropTypes.any,
}

export default SocialLinks
