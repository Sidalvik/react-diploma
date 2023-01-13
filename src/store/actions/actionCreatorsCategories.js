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

    //  Acync functions
export async function fetchCategories(dispatch) {
    const showErrorMesage = (errorMessage) =>{
        dispatch(fetchCategoriesFiled(errorMessage));
        setTimeout(() => dispatch(resetErrorCategories()), 10 * 1000);
    }

    const abort = new AbortController();

    const url = `${process.env.REACT_APP_CATEGORIES}`;
    dispatch(fetchCategoriesRequest());

    try {
      const responce = await fetch(url, {signal: abort.signal});
      if (responce.ok) {
        try {
          const list = await responce.json();
          dispatch(fetchCategoriesSuccess(list));
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
    error: PropTypes.string.isRequired,
}

resetErrorCategories.propTypes = {
    arg: PropTypes.any,
}

fetchCategories.propTypes = {
    dispatch: PropTypes.func.isRequired,
}
