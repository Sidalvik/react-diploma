import PropTypes from 'prop-types';
import {CHANGE_ORDER_FIELD, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FILED, RESET_ORDER_FORM, RESET_ERROR_ORDER} from './actionTypes';


export function changeOrderField(name, value) {
    return {type: CHANGE_ORDER_FIELD, payload: {[name]: value}}   
}

export function postOrderRequest(orderBody) {
    return {type: POST_ORDER_REQUEST, payload: {}}   
}

export function postOrderSuccess(...agr) {
    return {type: POST_ORDER_SUCCESS, payload: {}}   
}

export function postOrderFiled(error) {
    return {type: POST_ORDER_FILED, payload: {error}}   
}

export function resetErrorOrder(...agr) {
    return {type: RESET_ERROR_ORDER, payload: {}}   
}

export function resetOrderForm(...agr) {
    return {type: RESET_ORDER_FORM, payload: {}}   
}


//  PropTypes

changeOrderField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
}

postOrderRequest.propTypes = {
    orderBody: PropTypes.string.isRequired,
}

postOrderSuccess.propTypes = {
    arg: PropTypes.any,
}

postOrderFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
}

resetErrorOrder.propTypes = {
    arg: PropTypes.any,
}

resetOrderForm.propTypes = {
    arg: PropTypes.any,
}
