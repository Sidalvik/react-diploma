import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import CatalogItemCard from './CatalogItemCard/CatalogItemCard';
import Preloader from '../../../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCatalogItemsFiled, fetchCatalogItemsRequest, fetchCatalogItemsSuccess, resetErrorCatalogItems} from '../../../../store/actions/actionCreators';

function Items(props) {
const createFilterString = useCallback((filter) => {
    const filterParams = {
        query: process.env.REACT_APP_ITEMS_QUERY_PARAM_NAME || 'q',
        categoryId: process.env.REACT_APP_ITEMS_CATEGORY_PARAM_NAME || 'categoryId',
        offset: process.env.REACT_APP_ITEMS_LOAD_MORE_PARAM_NAME || 'offset',
    }    
    const url = Object.entries(filter)
        .filter((item) => item[1])
        .map((item) => item[1] ? `${filterParams[item[0]]}=${item[1]}` : '')
        .join('&');
    return url ? '?' + url : '';
}, []);

const search = useSelector((store) => store.catalogSearch);
const categories = useSelector((store) => store.categories);
const catalogItems = useSelector((store) => store.catalogItems);
const dispatch = useDispatch();

const filter = {
    query: search.filter,
    categoryId: categories.activeId,
}

const fetchCatalog = async (filter, next=false) => {
    const url = process.env.REACT_APP_ITEMS + createFilterString(filter);

    dispatch(fetchCatalogItemsRequest(next));
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

    useEffect(() => {
        if (catalogItems.loading) return
        fetchCatalog(filter, false);
        return
    },[catalogItems.loading, fetchCatalog])

    const handleGetNext = () => {
        fetchCatalog({...filter, offset: catalogItems.list.length}, true);
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
