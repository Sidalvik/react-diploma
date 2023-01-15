import PropTypes from 'prop-types';
import {RESET_CATEGORIES, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FILED, RESET_ERROR_CATEGORIES} from '../actions/actionTypes';


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
export async function fetchCategories(dispatch, controller) {
    const showErrorMesage = (error) =>{
        if (error.name === 'AbortError') return;

        dispatch(fetchCategoriesFiled(error));
        setTimeout(() => dispatch(resetErrorCategories()),  (+process.env.REACT_APP_ERROR_RESET_TIMEOUT || 10) * 1000);
    }

    const url = `${process.env.REACT_APP_CATEGORIES}`;
    dispatch(fetchCategoriesRequest());

    try {
      const responce = await fetch(url, {signal: controller.signal});
      if (responce.ok) {
        try {
          const list = await responce.json();
          dispatch(fetchCategoriesSuccess(list));
        } catch (error) {
            showErrorMesage({name: error.name, message: error.message});
        }
      } else {
        showErrorMesage(`Error ${responce.status}: ${responce.statusText}`);
      }
    } catch (error) {
        showErrorMesage({name: error.name, message: error.message});
    }
}


    //  PropTypes
// changeActiveCategories.propTypes = {
//     id: PropTypes.number.isRequired,
// }

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
    error: PropTypes.shape({
        status: PropTypes.number,
        message: PropTypes.string.isRequired,
    }).isRequired,
}

resetErrorCategories.propTypes = {
    arg: PropTypes.any,
}

fetchCategories.propTypes = {
    dispatch: PropTypes.func.isRequired,
}
