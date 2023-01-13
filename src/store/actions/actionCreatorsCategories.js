import PropTypes from 'prop-types';
import {CHANGE_ACTIVE_CATEGORIES, RESET_CATEGORIES, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FILED, RESET_ERROR_CATEGORIES} from '../actions/actionTypes';

export function changeActiveCategories(id) {
    return {type: CHANGE_ACTIVE_CATEGORIES, payload: {id}};
}

export function resetCategories(...arg) {
    return {type: RESET_CATEGORIES, payload: {}};
}

export function fetchCategoriesRequest(...arg) {
    return {type: FETCH_CATEGORIES_REQUEST, payload: {}};
}   //  TODO GET from server

export function fetchCategoriesSuccess(list) {
    return {type: FETCH_CATEGORIES_SUCCESS, payload: {list}};
}   //  TODO GET from server

export function fetchCategoriesFiled(error) {
    return {type: FETCH_CATEGORIES_FILED, payload: {error}};
}   //  TODO GET from server

export function resetErrorCategories(...arg) {
    return {type: RESET_ERROR_CATEGORIES, payload: {}};
}


//  PropTypes
changeActiveCategories.propTypes = {
    id: PropTypes.number.isRequired,
}

resetCategories.propTypes = {
    arg: PropTypes.any,
}

fetchCategoriesRequest.propTypes = {
    arg: PropTypes.any,
}

fetchCategoriesSuccess.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

fetchCategoriesFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
}

resetErrorCategories.propTypes = {
    arg: PropTypes.any,
}
