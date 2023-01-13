import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import CatalogItemCard from './CatalogItemCard/CatalogItemCard';
import Preloader from '../../../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCatalogItemsFiled, fetchCatalogItemsRequest, fetchCatalogItemsSuccess, resetErrorCatalogItems, setFilterCatalogItems} from '../../../../store/actions/actionCreators';

function Items(props) {

const catalogItems = useSelector((store) => store.catalogItems);
const dispatch = useDispatch();


const fetchCatalog = async () => {
    // const url = process.env.REACT_APP_ITEMS + createFilterString();

    // dispatch(fetchCatalogItemsRequest(next));
    // try {
    //   const responce = await fetch(url);
    //   if (responce.ok) {
    //     try {
    //       const list = await responce.json();
    //       dispatch(fetchCatalogItemsSuccess(list, next));
    //     } catch (error) {
    //       dispatch(fetchCatalogItemsFiled(error.message));
    //       setTimeout(() => dispatch(resetErrorCatalogItems()), 10 * 1000);
    //     }
    //   } else {
    //     dispatch(fetchCatalogItemsFiled(`Error ${responce.status}: ${responce.statusText}`));
    //     setTimeout(() => dispatch(resetErrorCatalogItems()), 10 * 1000);
    //   }
    // } catch (error) {
    //   dispatch(fetchCatalogItemsFiled(error.message));
    //   setTimeout(() => dispatch(resetErrorCatalogItems()), 10 * 1000);
    // }
  }

    // useEffect(() => {
    //     if (catalogItems.loading) return
    //     fetchCatalog();
    //     return
    // },[catalogItems.loading, fetchCatalog])

    const handleGetNext = () => {
        dispatch(setFilterCatalogItems({offset: catalogItems.list.length}));
    }


    const items = catalogItems.list.map((item) => <div className='col-4' key={item.id}><CatalogItemCard className={'catalog-item-card'} item={item}/></div>);
  return (
    <>
        <div className='row'>
            {items}
        </div>
        {!catalogItems.isAll && <div className='text-center'>
            <button className='btn btn-outline-primary' onClick={handleGetNext}>Загрузить ещё</button>
        </div>}
        {false && <Preloader/>}
    </>
  )
}

Items.propTypes = {
    props: PropTypes.any,
}


export default Items
