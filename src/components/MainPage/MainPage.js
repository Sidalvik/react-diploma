import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopSales from '../TopSales/TopSales';
import Catalog from '../CatalogPage/Catalog/Catalog';
import Categories from '../CatalogPage/Catalog/Categories/Categories';
import Items from '../CatalogPage/Catalog/Items/Items';
import { useDispatch } from 'react-redux';
import { setFilterCatalogItems } from '../../store/actions/actionCreatorsCatalogItems';
import { changeCatalogSearch } from '../../store/actions/actionCreatorsCatalogSearch';

function MainPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilterCatalogItems({query: '', offset: 0}));
    dispatch(changeCatalogSearch(''));
  })

  return (
    <>
      <TopSales/>
      <Catalog>
        <Categories />
        <Items />
      </Catalog>
    </>

  )
}

MainPage.propTypes = {
    props: PropTypes.any,
}

export default MainPage
