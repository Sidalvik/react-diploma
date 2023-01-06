import React from 'react';
import PropTypes from 'prop-types';
import TopSales from '../TopSales/TopSales';
import Catalog from '../CatalogPage/Catalog/Catalog';
import Categories from '../CatalogPage/Catalog/Categories/Categories';
import Items from '../CatalogPage/Catalog/Items/Items';

function MainPage(props) {
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
