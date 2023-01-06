import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import CartButton from './CartButton/CartButton';


function HeaderControls(props) {
    
  return (
    <div>
        <div className='header-controls-pics'>
            <div data-id='search-expander' className='header-controls-pic header-controls-search'></div>
            <CartButton/>
        </div>
        <SearchForm visible={false}/>
    </div>
  )
}

HeaderControls.propTypes = {
    props: PropTypes.any,
}

export default HeaderControls
