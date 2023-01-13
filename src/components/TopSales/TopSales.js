import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import CatalogItemCard from '../CatalogPage/Catalog/Items/CatalogItemCard/CatalogItemCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopsales} from '../../store/actions/actionCreatorsTopsales';


function TopSales(props) {
  const dispatch = useDispatch();
  const topSales = useSelector((state) => state.topSales);
  
  useEffect(() => {
    fetchTopsales(dispatch);
  }, [dispatch]);

  if (!topSales.loading && !topSales.error && topSales.list.length === 0) {
    return <></>
  }

  const items = topSales.list.map((item) => <div className="col-4" key={item.id}><CatalogItemCard className='' item={item}/></div>)

  return (
    <section className='top-sales'>
        <h2 className='text-center'>Хиты продаж!</h2>
        {!topSales.loading &&
          <div className="row">
            {items}
        </div>}
        {topSales.loading && <Preloader/>}
        {topSales.error && <ErrorMessage errorText={topSales.error}/>}
    </section>
  )
}

TopSales.propTypes = {
    props: PropTypes.any,
}

export default TopSales
