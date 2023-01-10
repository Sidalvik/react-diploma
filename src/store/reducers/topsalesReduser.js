import PropTypes from 'prop-types';
import {FETCH_TOPSALES_REQUEST,FETCH_TOPSALES_SUCCESS, FETCH_TOPSALES_FILED, RESET_ERROR_TOPSALES, RESET_TOPSALES} from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
    error: null,
}

export default function topsalesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOPSALES_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_TOPSALES_SUCCESS:
            const {list} = action.payload;
            return {...state, list: list, loading: false, error: null};
        case FETCH_TOPSALES_FILED:
            const {error} = action.payload;
            return {...initialState, error: error};
        case RESET_ERROR_TOPSALES:
            return {...state, error: null};
        case RESET_TOPSALES:
            return {...initialState};
        default:
            return state;
    };
}

topsalesReducer.propTypes = {
    state: PropTypes.shape({
        list: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([null, PropTypes.objectOf(Error)]),
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
