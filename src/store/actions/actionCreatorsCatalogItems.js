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


//  PropTypes

fetchCatalogItemsRequest.propTypes = {
    arg: PropTypes.any,
}

fetchCatalogItemsSuccess.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    next: PropTypes.bool,
}

fetchCatalogItemsFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
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
