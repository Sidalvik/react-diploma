import PropTypes from 'prop-types';
import {ACTIVATE_HEADER_SEARCH_FIELD, RESET_HEADER_SEARCH_FIELD, CHANGE_HEADER_SEARCH_FIELD} from '../actions/actionTypes';

const initialState = {
    visible: false,
    value: '',
};

export default function headerSearchReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_HEADER_SEARCH_FIELD:
            return {...initialState};
        case CHANGE_HEADER_SEARCH_FIELD:
            const {value} = action.payload;
            return {...state, value: value.replaceAll(/[?&]/gi, '')};
        case ACTIVATE_HEADER_SEARCH_FIELD:
            return {...state, visible: true};
        default: 
            return state;
    };
}

headerSearchReducer.propTypes = {
    state: PropTypes.shape({
        visible: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}