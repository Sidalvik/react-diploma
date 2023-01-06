import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks/SocialLinks';

function ContactsSection(props) {
  return (
    <section className='footer-contacts'>
        <h5>Контакты:</h5>
        <a className='footer-contacts-phone' href='tel:+7-495-790-35-03'>+7 495 79 03 5 03</a>
        <span className='footer-contacts-working-hours'>Ежедневно: с 09-00 до 21-00</span>
        <a className='footer-contacts-email' href='mailto:office@bosanoga.ru'>office@bosanoga.ru</a>
        <SocialLinks/>
    </section>
  )
}

ContactsSection.propTypes = {
    props: PropTypes.any,
}

export default ContactsSection
