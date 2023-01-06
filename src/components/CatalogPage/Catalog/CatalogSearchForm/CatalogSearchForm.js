import React from 'react';
import PropTypes from 'prop-types';
import './CatalogSearchForm.css';

function CatalogSearchForm(props) {
  return (
    <form className='catalog-search-form form-inline'>
        <input className='form-control' placeholder='Поиск'/>
    </form>
  )
}

CatalogSearchForm.propTypes = {
    props: PropTypes.any
}

export default CatalogSearchForm
