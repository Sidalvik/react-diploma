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


    //  PropTypes
fetchProductRequest.propTypes = {
    arg: PropTypes.any,
}

fetchProductSuccess.propTypes = {
    item: PropTypes.object.isRequired,
}

fetchProductFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
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
