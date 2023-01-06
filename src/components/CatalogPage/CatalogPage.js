import React from 'react';
import PropTypes from 'prop-types';
import './CatalogPage.css';
import Catalog from './Catalog/Catalog';
import CatalogSearchForm from './Catalog/CatalogSearchForm/CatalogSearchForm';
import Categories from './Catalog/Categories/Categories';
import Items from './Catalog/Items/Items';

function CatalogPage(props) {

  return (
    <Catalog>
        <CatalogSearchForm/>
        <Categories />
        <Items />
    </Catalog>
    )
}

CatalogPage.propTypes = {
    props: PropTypes.any,
}

export default CatalogPage
