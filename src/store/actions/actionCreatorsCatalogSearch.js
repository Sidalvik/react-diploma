import PropTypes from 'prop-types';
import {CHANGE_CATALOG_SEARCH_FIELD, RESET_CATALOG_SEARCH_FIELD} from './actionTypes';

export function changeCatalogSearch(value) {
    return {type: CHANGE_CATALOG_SEARCH_FIELD, payload: {value}};
}

export function resetCatalogSearch(...arg) {
    return {type: RESET_CATALOG_SEARCH_FIELD, payload: {}};
}


//  PropTypes

changeCatalogSearch.propTypes = {
    value: PropTypes.string.isRequired,
}

resetCatalogSearch.propTypes = {
    arg: PropTypes.any,
}
