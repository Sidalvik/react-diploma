import PropTypes from 'prop-types';
import { resetCart } from './actionCreatorsCart';
import {CHANGE_ORDER_FIELD, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FILED, RESET_ORDER_FORM, RESET_ERROR_ORDER} from './actionTypes';


export function changeOrderField(name, value) {
    return {type: CHANGE_ORDER_FIELD, payload: {[name]: value}}   
}

export function postOrderRequest(...agr) {
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


    //  Async functions
export async function postOrder(dispatch, orderBody) {
    const showErrorMesage = (error) => {
        dispatch(postOrderFiled(error));
        setTimeout(() => dispatch(resetErrorOrder()), (+process.env.REACT_APP_ERROR_RESET_TIMEOUT ||10) * 1000);
    }
    const abort = new AbortController();

    const options = {
        method: 'POST',
        signal: abort.signal,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: orderBody,
    };

    const url = process.env.REACT_APP_ORDER;

    try {
        dispatch(postOrderRequest());
        const responce = await fetch(url, options);
        if (responce.ok) {
            dispatch(postOrderSuccess());
            dispatch(resetCart());
        } else {
            showErrorMesage({status: responce.status, message: `Error! ${responce.status}: ${responce.statusText}`});
            setTimeout(() => dispatch(resetErrorOrder()), (+process.env.REACT_APP_ERROR_RESET_TIMEOUT || 10) * 1000);
        }
    } catch (error) {
        showErrorMesage({message: error.message});
    }
}


    //  PropTypes

changeOrderField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
}

postOrderRequest.propTypes = {
    arg: PropTypes.any,
}

postOrderSuccess.propTypes = {
    arg: PropTypes.any,
}

postOrderFiled.propTypes = {
    error: PropTypes.shape({
        status: PropTypes.number,
        message: PropTypes.string.isRequired,
    }).isRequired,
}

resetErrorOrder.propTypes = {
    arg: PropTypes.any,
}

resetOrderForm.propTypes = {
    arg: PropTypes.any,
}
