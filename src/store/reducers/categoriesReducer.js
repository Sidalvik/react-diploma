import PropTypes from 'prop-types';
import {RESET_CATEGORIES, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FILED, RESET_ERROR_CATEGORIES} from '../actions/actionTypes';

const initialState = {
    list: [{id: 0, title: 'Все'}],
    loading: false,
    error: null,
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_CATEGORIES_SUCCESS:
            const {list} = action.payload;
            return {...initialState, list: [...initialState.list, ...list]};
        case FETCH_CATEGORIES_FILED:
            const {error} = action.payload;
            return {...state, loading: false, error};
        case RESET_ERROR_CATEGORIES:
            return {...state, error: null};
        case RESET_CATEGORIES:
            return {...initialState};
        default:
            return state;
    };
}

categoriesReducer.propTypes = {
    state: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([
            null,
            PropTypes.shape({
                status: PropTypes.number,
                message: PropTypes.string.isRequired,
            }),
        ]).isRequired,
        activId: PropTypes.number.isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
