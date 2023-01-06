import React from 'react';
import PropTypes from 'prop-types';
import CatalogItemCard from './CatalogItemCard/CatalogItemCard';
import Preloader from '../../../Preloader/Preloader';

function Items(props) {

  return (
    <>
        <div className='row'>
            <div className='col-4'>
                <CatalogItemCard className={'catalog-item-card'}/>
            </div>
            <div className='col-4'>
                <CatalogItemCard className={'catalog-item-card'}/>
            </div>
            <div className='col-4'>
                <CatalogItemCard className={'catalog-item-card'}/>
            </div>
        </div>
        {true && <div className='text-center'>
            <button className='btn btn-outline-primary'>Загрузить ещё</button>
        </div>}
        {false && <Preloader/>}
    </>
  )
}

Items.propTypes = {
    props: PropTypes.any,
}

export default Items
