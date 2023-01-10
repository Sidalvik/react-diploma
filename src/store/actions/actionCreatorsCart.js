import PropTypes from 'prop-types';
import {RESTORE_CART_STATE, ADD_CART_ITEM, REMOVE_CART_ITEM, RESET_CART} from './actionTypes';

export function restoreCartState(...arg) {
    return {type: RESTORE_CART_STATE, payload: {}}
}

export function addCartItem(item) {
    return {type: ADD_CART_ITEM, payload: {item}}
}

export function removeCartItem(item) {
    return {type: REMOVE_CART_ITEM, payload: {item}}
}

export function resetCart(...arg) {
    return {type: RESET_CART, payload: {}}
}


//  PropTypes

restoreCartState.propTypes = {
    arg: PropTypes.any,
}

addCartItem.propTypes = {
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

removeCartItem.propTypes = {
    id: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
}

resetCart.propTypes = {
    arg: PropTypes.any,
}
