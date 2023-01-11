import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import CartButton from './CartButton/CartButton';
import {activateHeaderSearch, changeCatalogSearch, resetHeaderSearch, setFilterCatalogItems} from '../../../store/actions/actionCreators';
import {CATALOG_PAGE as linkToCatalog} from '../../../config/links';



function HeaderControls(props) {
    const dispatch = useDispatch();
    const headerSearch = useSelector((state) => state.headerSearch);
    const navigate = useNavigate();

    const handleActivate = () => {
      if (!headerSearch.visible) {
        dispatch(activateHeaderSearch());
        return
      } 
      if (headerSearch.visible && headerSearch.value) {
        dispatch(changeCatalogSearch(headerSearch.value));
        dispatch(setFilterCatalogItems({query: headerSearch.value}));
      }
      
      dispatch(resetHeaderSearch());
      navigate(linkToCatalog(), {replace: true});
    }

  return (
    <div>
        <div className='header-controls-pics'>
            <div data-id='search-expander' className='header-controls-pic header-controls-search' onClick={handleActivate}></div>
            <CartButton/>
        </div>
        <SearchForm />
    </div>
  )
}

HeaderControls.propTypes = {
    props: PropTypes.any,
}

export default HeaderControls
