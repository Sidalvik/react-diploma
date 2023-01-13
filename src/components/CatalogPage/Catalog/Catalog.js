import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesFiled, fetchCategoriesRequest, fetchCategoriesSuccess, resetErrorCategories } from '../../../store/actions/actionCreatorsCategories';
import { fetchCatalogItemsFiled, fetchCatalogItemsSuccess, resetErrorCatalogItems } from '../../../store/actions/actionCreatorsCatalogItems';

function Catalog(props) {
    // const categories = useSelector((state) => state.categories);
    const catalogItemsFilter = useSelector((state) => state.catalogItems.filter);
    const dispatch = useDispatch();

        //  function prepaid url filter-string
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

    
    useEffect(() => {
    //  load categories
    
    (async () => {
        const url = process.env.REACT_APP_CATEGORIES;
        const showError = (errorMessage) => {
            dispatch(fetchCategoriesFiled(errorMessage));
            setTimeout(() => dispatch(resetErrorCategories()), 10 * 1000);
        }

        dispatch(fetchCategoriesRequest());
        try {
            const responce = await fetch(url);
            if (responce.ok) {
                try {
                    const list = await responce.json();
                    dispatch(fetchCategoriesSuccess(list));
                } catch (error) {
                    showError(error.message);
                }
            } else {
                showError(`Ошибка: ${responce.status}. ${responce.statusText}`);
            }
        } catch (error) {
            showError(error.message);
        }
    })();

    //  load catalogItems
    (async () => {
        const url = process.env.REACT_APP_ITEMS + createFilterString(catalogItemsFilter);
        const showError = (errorMessage) => {
            dispatch(fetchCatalogItemsFiled(errorMessage));
            setTimeout(() => dispatch(resetErrorCatalogItems()), 10 * 1000);
        }

        dispatch(fetchCategoriesRequest());
        try {
            const responce = await fetch(url);
            if (responce.ok) {
                try {
                    const list = await responce.json();
                    dispatch(fetchCatalogItemsSuccess(list));
                } catch (error) {
                    showError(error.message);
                }
            } else {
                showError(`Ошибка: ${responce.status}. ${responce.statusText}`);
            }
        } catch (error) {
            showError(error.message);
        }
    })();

    }, [dispatch, catalogItemsFilter, createFilterString]);


  return (
      <section className='catalog'>
          <h2 className='text-center'>Каталог</h2>
          {props.children}
      </section>
  )
}

Catalog.propTypes = {
    props: PropTypes.any,
}

export default Catalog
