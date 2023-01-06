import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {ROOT_PAGE as root, CATALOG_PAGE as linkToCatalog, ABOUT_PAGE as linkToAbout, CONTACTS_PAGE as linkToContacts} from '../../../config/links';


function NavigationList(props) {
  return (
    <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
            <NavLink to={root()} className='nav-link'>Главная</NavLink>
            {/* <a className='nav-link' href='/'>Главная</a> */}
        </li>
        <li className='nav-item'>
            <NavLink to={linkToCatalog()} className='nav-link'>Каталог</NavLink>
            {/* <a className='nav-link' href='/catalog.html'>Каталог</a> */}
        </li>
        <li className='nav-item'>
            <NavLink to={linkToAbout()} className='nav-link'>О магазине</NavLink>
            {/* <a className='nav-link' href='/about.html'>О магазине</a> */}
        </li>
        <li className='nav-item'>
            <NavLink to={linkToContacts()} className='nav-link'>Контакты</NavLink>
            {/* <a className='nav-link' href='/contacts.html'>Контакты</a> */}
        </li>
    </ul>
  )
}

NavigationList.propTypes = {
    props: PropTypes.any,
}

export default NavigationList
