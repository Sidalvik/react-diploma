import PropTypes from 'prop-types';
import {FETCH_CATALOG_ITEMS_REQUEST, FETCH_CATALOG_ITEMS_SUCCESS, FETCH_CATALOG_ITEMS_FILED, RESET_ERROR_CATALOG_ITEMS, RESET_CATALOG_ITEMS} from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
    error: null,
}

export default function catalogItemsReduscer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATALOG_ITEMS_REQUEST:
            return {...state, loading: true, error: null}
        case FETCH_CATALOG_ITEMS_SUCCESS:
            const {list} = action.payload;
            return {...initialState, list};
        case FETCH_CATALOG_ITEMS_FILED:
            const {error} = action.payload;
            return {...state, loading: false, error};
        case RESET_ERROR_CATALOG_ITEMS:
            return {...state, error:null};
        case RESET_CATALOG_ITEMS:
            return {...initialState};
        default:
            return state;
    };
}


catalogItemsReduscer.propTypes = {
    state: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([null, PropTypes.objectOf(Error)]).isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
