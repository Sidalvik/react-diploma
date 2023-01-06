import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import NavigationList from './NavigationList/NavigationList';
import HeaderControls from './HeaderControls/HeaderControls';
import Logo from './Logo/Logo';

function Header(props) {
    
  return (
    <header className='container'>
        <div className='row'>
            <div className='col'>
                <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                    <Logo/>
                    <div className='collapase navbar-collapse' id='navbarMain'>
                        <NavigationList/>
                        <HeaderControls/>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

Header.propTypes = {
    props: PropTypes.any,
}

export default Header
