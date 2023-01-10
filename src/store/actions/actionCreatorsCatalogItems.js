import PropTypes from 'prop-types';
import {FETCH_CATALOG_ITEMS_REQUEST, FETCH_CATALOG_ITEMS_SUCCESS, FETCH_CATALOG_ITEMS_FILED, RESET_ERROR_CATALOG_ITEMS, RESET_CATALOG_ITEMS} from '../actions/actionTypes';


export function fetchCatalogItemsRequest(...arg) {
    return {type: FETCH_CATALOG_ITEMS_REQUEST, payload: {}}
}

export function fetchCatalogItemsSuccess(list) {
    return {type: FETCH_CATALOG_ITEMS_SUCCESS, payload: {list}}
}

export function fetchCatalogItemsFiled(error) {
    return {type: FETCH_CATALOG_ITEMS_FILED, payload: {error}}
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
}

fetchCatalogItemsFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
}

resetErrorCatalogItems.propTypes = {
    arg: PropTypes.any,
}

resetCatalogItems.propTypes = {
    arg: PropTypes.any,
}
