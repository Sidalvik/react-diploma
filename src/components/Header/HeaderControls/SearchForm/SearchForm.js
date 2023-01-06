import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
const { visible } = props;

  return (
    <form data-id='search-form' className={'header-controls-search-form form-inline' + (visible ? '' : ' invisible')}>
        <input className='form-control' placeholder='Поиск'/>
    </form>
  )
}


SearchForm.propTypes = {
    props: PropTypes.any,
}

export default SearchForm
