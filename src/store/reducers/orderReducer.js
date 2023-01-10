import PropTypes from 'prop-types';
import {CHANGE_ORDER_FIELD, RESET_ORDER_FORM, RESET_ERROR_ORDER, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FILED} from '../actions/actionTypes';

const initialState = {
    phone: '',
    address: '',
    agree: true,
    loading: false,
    error: null,
    successOrder: false,
}

export default function orderReduser(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ORDER_FIELD:
            const field = action.payload;
            return {...state, ...field};
        case POST_ORDER_REQUEST:
            return {...state, loading: true, error: null, successOrder: false};
        case POST_ORDER_SUCCESS:
            return {...initialState, successOrder: true};
        case POST_ORDER_FILED:
            const {error} = action.payload;
            return {...state, error, loading: false, successOrder: false};
        case RESET_ERROR_ORDER:
            return {...state, error: null};
        case RESET_ORDER_FORM:
            return {...initialState};
        default:
            return state;
    }
}

//  PropTypes

orderReduser.propTypes = {
    state: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        agree: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([null, PropTypes.objectOf(Error)]).isRequired,
        successOrder: PropTypes.bool.isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}