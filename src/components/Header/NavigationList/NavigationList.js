import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {ROOT_PAGE as root, CATALOG_PAGE as linkToCatalog, ABOUT_PAGE as linkToAbout, CONTACTS_PAGE as linkToContacts} from '../../../config/links';


function NavigationList(props) {
  return (
    <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
            <NavLink to={root()} className='nav-link'>Главная</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={linkToCatalog()} className='nav-link'>Каталог</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={linkToAbout()} className='nav-link'>О магазине</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to={linkToContacts()} className='nav-link'>Контакты</NavLink>
        </li>
    </ul>
  )
}

NavigationList.propTypes = {
    props: PropTypes.any,
}

export default NavigationList
