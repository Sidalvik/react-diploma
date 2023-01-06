import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import CatalogItemCard from '../CatalogPage/Catalog/Items/CatalogItemCard/CatalogItemCard';


function TopSales(props) {
  return (
    <section className='top-sales'>
        <h2 className='text-center'>Хиты продаж!</h2>
        <div className="row">
          <div className="col-4">
            <CatalogItemCard/>
          </div>
          <div className="col-4">
            <CatalogItemCard/>
          </div>
          <div className="col-4">
            <CatalogItemCard/>
          </div>
        </div>
        {false && <Preloader/>}
    </section>
  )
}

TopSales.propTypes = {
    props: PropTypes.any,
}

export default TopSales
