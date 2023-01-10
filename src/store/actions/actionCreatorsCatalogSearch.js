import PropTypes from 'prop-types';
import {CHANGE_CATALOG_SEARCH_FIELD, RESET_CATALOG_SEARCH_FIELD, SET_FILTER_CATALOG_SEARCH} from './actionTypes';

export function changeCatalogSearch(value) {
    return {type: CHANGE_CATALOG_SEARCH_FIELD, payload: {value}};
}

export function resetCatalogSearch(...arg) {
    return {type: RESET_CATALOG_SEARCH_FIELD, payload: {}};
}

export function setFilterCatalogSearch(...arg) {
    return {type: SET_FILTER_CATALOG_SEARCH, payload: {}};
}


//  PropTypes

changeCatalogSearch.propTypes = {
    value: PropTypes.string.isRequired,
}

resetCatalogSearch.propTypes = {
    arg: PropTypes.any,
}

setFilterCatalogSearch.propTypes = {
    arg: PropTypes.any,
}
