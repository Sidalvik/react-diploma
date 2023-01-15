import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CatalogItemCard from './CatalogItemCard/CatalogItemCard';
import Preloader from '../../../Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCatalogItems, setFilterCatalogItems} from '../../../../store/actions/actionCreators';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage';

function Items(props) {
    const catalogItems = useSelector((store) => store.catalogItems);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const controller = new AbortController();
      fetchCatalogItems(dispatch, controller, catalogItems.filter);
      return (() => controller.abort());
    }, [dispatch, catalogItems.filter])
  
    const handleGetNext = () => {
        dispatch(setFilterCatalogItems({offset: catalogItems.list.length}));
    }
  
    const items = catalogItems.list.map((item) => <div className='col-4' key={item.id}><CatalogItemCard className={'catalog-item-card'} item={item}/></div>);
    
  return (
    <>
        <div className='row'>
            {items}
        </div>
        <div className='row'>
          <div className="col-12">
            {!catalogItems.loading && catalogItems.error && <ErrorMessage errorText={catalogItems.error?.message}/>}
            {
              !(catalogItems.isAll || catalogItems.loading || catalogItems.error) && 
              <div className='text-center'>
                  <button className='btn btn-outline-primary' onClick={handleGetNext} >Загрузить ещё</button>
              </div>
            }
            {catalogItems.loading && <Preloader/>}
          </div>
        </div>
    </>
  )
}

Items.propTypes = {
    props: PropTypes.any,
}


export default Items
