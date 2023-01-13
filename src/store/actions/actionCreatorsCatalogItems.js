import PropTypes from 'prop-types';
import {FETCH_CATALOG_ITEMS_REQUEST, FETCH_CATALOG_ITEMS_SUCCESS, FETCH_CATALOG_ITEMS_FILED, SET_FILTER_CATALOG_ITEMS, RESET_FILTER_CATALOG_ITEMS, RESET_ERROR_CATALOG_ITEMS, RESET_CATALOG_ITEMS} from '../actions/actionTypes';


export function fetchCatalogItemsRequest(...arg) {
    return {type: FETCH_CATALOG_ITEMS_REQUEST, payload: {}}
}

export function fetchCatalogItemsSuccess(list) {
    return {type: FETCH_CATALOG_ITEMS_SUCCESS, payload: {list}}
}

export function fetchCatalogItemsFiled(error) {
    return {type: FETCH_CATALOG_ITEMS_FILED, payload: {error}}
}

export function setFilterCatalogItems(filter) {
    return {type: SET_FILTER_CATALOG_ITEMS, payload: {filter}}
}

export function resetFilterCatalogItems() {
    return {type: RESET_FILTER_CATALOG_ITEMS, payload: {}}
}

export function resetErrorCatalogItems(...arg) {
    return {type: RESET_ERROR_CATALOG_ITEMS, payload: {}}
}

export function resetCatalogItems(...arg) {
    return {type: RESET_CATALOG_ITEMS, payload: {}}
}


    // async functions
export async function fetchCatalogItems(dispatch, filter = {}) {
    const showErrorMesage = (errorMessage) =>{
        dispatch(fetchCatalogItemsFiled(errorMessage));
        setTimeout(() => dispatch(resetErrorCatalogItems()), 10 * 1000);
    }

    const abort = new AbortController();

    const url = `${process.env.REACT_APP_ITEMS}${createFilterString (filter)}`;
    dispatch(fetchCatalogItemsRequest());

    try {
      const responce = await fetch(url, {signal: abort.signal});
      if (responce.ok) {
        try {
          const list = await responce.json();
          dispatch(fetchCatalogItemsSuccess(list));
        } catch (error) {
            showErrorMesage(error.message);
        }
      } else {
        showErrorMesage(`Error ${responce.status}: ${responce.statusText}`);
      }
    } catch (error) {
        showErrorMesage(error.message);
    }
}

function createFilterString(filter) {
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
}


//  PropTypes

fetchCatalogItemsRequest.propTypes = {
    arg: PropTypes.any,
}

fetchCatalogItemsSuccess.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

fetchCatalogItemsFiled.propTypes = {
    error: PropTypes.string.isRequired,
}

setFilterCatalogItems.propTypes = {
    filter: PropTypes.shape({
        query: PropTypes.string,
        categoryId: PropTypes.string,
        offset: PropTypes.string,
    }).isRequired,
}

 resetFilterCatalogItems.propTypes = {
    arg: PropTypes.any,
}

resetErrorCatalogItems.propTypes = {
    arg: PropTypes.any,
}

resetCatalogItems.propTypes = {
    arg: PropTypes.any,
}

createFilterString.propTypes = {
    filter: PropTypes.shape({
        query: PropTypes.string,
        categoryId: PropTypes.string,
        offset: PropTypes.string,
    }).isRequired,
}

fetchCatalogItems.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filter: PropTypes.shape({
        query: PropTypes.string,
        categoryId: PropTypes.string,
        offset: PropTypes.string,
    }),
}