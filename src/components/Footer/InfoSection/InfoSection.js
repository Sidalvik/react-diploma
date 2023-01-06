import React from 'react';
import PropTypes from 'prop-types';
import FooterNavItem from './FooterNavItem/FooterNavItem';

function InfoSection(props) {
  return (
    <section>
        <h5>Информация</h5>
        <ul className='nav flex-column'>
            <FooterNavItem><a href='/about.html' className='nav-link'>О магазине</a></FooterNavItem>
            <FooterNavItem><a href='/catalog.html' className='nav-link'>Каталог</a></FooterNavItem>
            <FooterNavItem><a href='/contacts.html' className='nav-link'>Контакты</a></FooterNavItem>
        </ul>
    </section>
  )
}

InfoSection.propTypes = {
    props: PropTypes.any,
}

export default InfoSection
