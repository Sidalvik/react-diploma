import PropTypes from 'prop-types';
import {FETCH_TOPSALES_REQUEST,FETCH_TOPSALES_SUCCESS, FETCH_TOPSALES_FILED, RESET_ERROR_TOPSALES, RESET_TOPSALES} from '../actions/actionTypes';

export function fetchTopsalesRequest(...arg) {
    return {type: FETCH_TOPSALES_REQUEST, payload: {}};
}

export function fetchTopsalesSuccess(list) {
    return {type: FETCH_TOPSALES_SUCCESS, payload: {list}};
}   //  TODO fetch

export function fetchTopsalesFiled(error) {
    return {type: FETCH_TOPSALES_FILED, payload: {error}};
}   //  TODO fetch

export function resetErrorTopsales(...arg) {
    return {type: RESET_ERROR_TOPSALES, payload: {}};
}

export function resetTopsales(...arg) {
    return {type: RESET_TOPSALES, payload: {}};
}


//  PropTypes
fetchTopsalesRequest.propTypes = {
    arg: PropTypes.any,
}

fetchTopsalesSuccess.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

fetchTopsalesFiled.propTypes = {
    error: PropTypes.objectOf(Error).isRequired,
}

resetErrorTopsales.propTypes = {
    arg: PropTypes.any,
}

resetTopsales.propTypes = {
    arg: PropTypes.any,
}