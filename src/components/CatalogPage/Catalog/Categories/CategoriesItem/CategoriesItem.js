import React from 'react';
import PropTypes from 'prop-types';
// import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {CATALOG_PAGE as linkToCatalog} from '../../../../../config/links';
import {setFilterCatalogItems} from '../../../../../store/actions/actionCreators';

function CategoriesItem(props) {
  const {item} = props;
  const categories = useSelector((state) => state.categories);
  const {categoryId: filterCategoryId} = useSelector((state) => state.catalogItems.filter);
  const dispath = useDispatch();

  const handleCheck = (event) => {
    event.preventDefault();
    if (item.id === categories.activeId) return;

    dispath(setFilterCatalogItems({categoryId: item.id, offset: 0}));
  }

  return (
    <li className='nav-item'>
        <a className={`nav-link${(item.id === filterCategoryId ? ' active' : '')}`} href={`${linkToCatalog()}/?${process.env.REACT_APP_ITEMS_CATEGORY_PARAM_NAME + '='+ item.id}`} onClick={handleCheck}>{item.title}</a>
        {/* <NavLink to={`${linkToCatalog()}/?${process.env.REACT_APP_ITEMS_CATEGORY_PARAM_NAME + '='+ item.id}`} className={`nav-link${(item.id === filterCategoryId ? ' active' : '')}`} onClick={handleCheck}>{item.title}</NavLink> */}
    </li>
  )
}

CategoriesItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default CategoriesItem
