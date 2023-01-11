import PropTypes from 'prop-types';
import {CHANGE_CATALOG_SEARCH_FIELD, RESET_CATALOG_SEARCH_FIELD} from '../actions/actionTypes';

const initialState = {
    value: '',
};

export default function catalogSearchReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CATALOG_SEARCH_FIELD:
            const {value} = action.payload;
            return {...state, value: value.replaceAll(/[?&]/gi, '')};
        case RESET_CATALOG_SEARCH_FIELD:
            return {...initialState};
        default:
            return state;
    };
}

catalogSearchReducer.propTypes = {
    state: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
