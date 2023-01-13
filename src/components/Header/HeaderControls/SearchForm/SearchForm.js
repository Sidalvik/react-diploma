import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {activateHeaderSearch, changeHeaderSearch, changeCatalogSearch, resetHeaderSearch, setFilterCatalogItems} from '../../../../store/actions/actionCreators';
import {CATALOG_PAGE as linkToCatalog} from '../../../../config/links';

function SearchForm(props) {
  const dispatch = useDispatch();
  const headerSearch = useSelector((state) => state.headerSearch);
  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatch(changeHeaderSearch(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!headerSearch.visible) {
      dispatch(activateHeaderSearch());
      return
    } 
    if (headerSearch.visible && headerSearch.value) {
      dispatch(setFilterCatalogItems({query: headerSearch.value, offset: 0}));
      dispatch(changeCatalogSearch(headerSearch.value));
    }
    
    dispatch(resetHeaderSearch());
    navigate(linkToCatalog(), {replace: true});
  }

  return (
    <form data-id='search-form' className={'header-controls-search-form form-inline' + (headerSearch.visible ? '' : ' invisible')} onSubmit={handleSubmit}>
        <input className='form-control' placeholder='Поиск' value={headerSearch.value} onChange={handleChange}/>
    </form>
  )
}


SearchForm.propTypes = {
    props: PropTypes.any,
}

export default SearchForm
