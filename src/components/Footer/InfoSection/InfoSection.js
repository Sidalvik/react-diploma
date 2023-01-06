import React from 'react';
import PropTypes from 'prop-types';
import FooterNavItem from './FooterNavItem/FooterNavItem';
import {Link} from 'react-router-dom';
import {CATALOG_PAGE as linkToCatalog, ABOUT_PAGE as linkToAbout, CONTACTS_PAGE as linkToContacts, } from '../../../config/links';

function InfoSection(props) {
  return (
    <section>
        <h5>Информация</h5>
        <ul className='nav flex-column'>
            <FooterNavItem><Link to={linkToAbout()} className='nav-link'>О магазине</Link></FooterNavItem>
            <FooterNavItem><Link to={linkToCatalog()} className='nav-link'>Каталог</Link></FooterNavItem>
            <FooterNavItem><Link to={linkToContacts()} className='nav-link'>Контакты</Link></FooterNavItem>
        </ul>
    </section>
  )
}

InfoSection.propTypes = {
    props: PropTypes.any,
}

export default InfoSection
