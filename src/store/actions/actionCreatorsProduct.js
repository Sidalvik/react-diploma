import PropTypes from 'prop-types';
import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FILED, RESET_ERROR_PRODUCT, CHANGE_PRODUCT_ACTIVE_SIZE, RESET_ACTIVE_SIZE_PRODUCT, CHANGE_PRODUCT_COUNT} from '../actions/actionTypes';

export function fetchProductRequest(...arg) {
    return {type: FETCH_PRODUCT_REQUEST, payload: {}}
}

export function fetchProductSuccess(item) {
    return {type: FETCH_PRODUCT_SUCCESS, payload: {item}}
}

export function fetchProductFiled(error) {
    return {type: FETCH_PRODUCT_FILED, payload: {error}}
}

export function resetErrorProduct(...arg) {
    return {type: RESET_ERROR_PRODUCT, payload: {}}
}

export function changeProductActiveSize(size) {
    return {type: CHANGE_PRODUCT_ACTIVE_SIZE, payload: {size}}
}

export function resetActiveSizeProduct(...arg) {
    return {type: RESET_ACTIVE_SIZE_PRODUCT, payload: {}}
}

export function changeProductCount(step) {
    return {type: CHANGE_PRODUCT_COUNT, payload: {step}}
}

    //  Acync functions
export async function fetchProduct(dispatch, controller, id) {
    const showErrorMesage = (error) => {
        if (error.name === 'AbortError') return;

        dispatch(fetchProductFiled(error));
        // setTimeout(() => dispatch(resetErrorProduct()), (+process.env.REACT_APP_ERROR_RESET_TIMEOUT || 10) * 1000);
    }

    const url = `${process.env.REACT_APP_ITEMS}/${id}`;
    dispatch(fetchProductRequest());

    try {
      const responce = await fetch(url, {signal: controller.signal});
      if (responce.ok) {
        try {
          const list = await responce.json();
          dispatch(fetchProductSuccess(list));
        } catch (error) {
            showErrorMesage({name: error.name, message: error.message});
        }
      } else {
        showErrorMesage({status: responce.status, message: `Error ${responce.status}: ${responce.statusText}`});
      }
    } catch (error) {
        showErrorMesage({name: error.name, message: error.message});
    }
}


    //  PropTypes
fetchProductRequest.propTypes = {
    arg: PropTypes.any,
}

fetchProductSuccess.propTypes = {
    item: PropTypes.object.isRequired,
}

fetchProductFiled.propTypes = {
    error: PropTypes.shape({
        status: PropTypes.number,
        message: PropTypes.string.isRequired,
    }).isRequired,
}

resetErrorProduct.propTypes = {
    arg: PropTypes.any,
}

changeProductActiveSize.propTypes = {
    size: PropTypes.string.isRequired,
}

resetActiveSizeProduct.propTypes = {
    arg: PropTypes.any,
}

changeProductCount.propTypes = {
    step: PropTypes.number.isRequired,
}

fetchProduct.propTypes ={
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}