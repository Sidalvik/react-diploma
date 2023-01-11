import React from 'react';
import PropTypes from 'prop-types';
import './CatalogSearchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCatalogSearch } from '../../../../store/actions/actionCreatorsCatalogSearch';
import { setFilterCatalogItems } from '../../../../store/actions/actionCreatorsCatalogItems';

function CatalogSearchForm(props) {
  const dispatch = useDispatch();
  const catalogSearch = useSelector((state) => state.catalogSearch);

  const handleChange = (event) => {
    if (!event.target.value && catalogSearch.value) {
      dispatch(setFilterCatalogItems({query: ''}));
    }
    dispatch(changeCatalogSearch(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilterCatalogItems({query: catalogSearch.value}))
  }

  return (
    <form className='catalog-search-form form-inline' onSubmit={handleSubmit}>
        <input className='form-control' placeholder='Поиск' value={catalogSearch.value} onChange={handleChange}/>
    </form>
  )
}

CatalogSearchForm.propTypes = {
    props: PropTypes.any
}

export default CatalogSearchForm
