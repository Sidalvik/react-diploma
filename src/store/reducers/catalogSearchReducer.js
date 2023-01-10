import PropTypes from 'prop-types';
import {CHANGE_CATALOG_SEARCH_FIELD, RESET_CATALOG_SEARCH_FIELD, SET_FILTER_CATALOG_SEARCH} from '../actions/actionTypes';

const initialState = {
    value: '',
    filter: '',
};

export default function catalogSearchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATALOG_SEARCH_FIELD:
            const {value} = action.payload;
            return {...state, value};
        case RESET_CATALOG_SEARCH_FIELD:
            return {...initialState};
        case SET_FILTER_CATALOG_SEARCH:
            return {...state, filter: state.value};
        default:
            return state;
    };
}

catalogSearchReducer.propTypes = {
    state: PropTypes.shape({
        value: PropTypes.string.isRequired,
        filter: PropTypes.string.isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
