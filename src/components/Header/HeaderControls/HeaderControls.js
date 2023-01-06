import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';

function HeaderControls(props) {
    
  return (
    <div>
        <div className='header-controls-pics'>
            <div data-id='search-expander' className='header-controls-pic header-controls-search'></div>
            <div className='header-controls-pic header-controls-cart'>
            {1 && <div className='header-controls-cart-full'>{1}</div>}
            <div className='header-controls-cart-menu'></div>
            </div>
        </div>
        <SearchForm visible={false}/>
    </div>
  )
}

HeaderControls.propTypes = {
    props: PropTypes.any,
}

export default HeaderControls
