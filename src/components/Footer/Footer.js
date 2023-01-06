import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import InfoSection from './InfoSection/InfoSection';
import PaySection from './PaySection/PaySection';
import ContactsSection from './ContactsSection/ContactsSection';
import CopyrightSection from './CopyrightSection/CopyrightSection';

function Footer(props) {
  return (
    <footer className='container bg-light footer'>
      <div className='row'>
        <div className='col'>
          <InfoSection/>
        </div>
        <div className='col'>
          <PaySection/>
          <CopyrightSection/>
        </div>
        <div className='col text-right'>
          <ContactsSection/>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
    props: PropTypes.any,
}

export default Footer
