import PropTypes from 'prop-types';
import {FETCH_CATALOG_ITEMS_REQUEST, FETCH_CATALOG_ITEMS_SUCCESS, FETCH_CATALOG_ITEMS_FILED, SET_FILTER_CATALOG_ITEMS, RESET_FILTER_CATALOG_ITEMS, RESET_ERROR_CATALOG_ITEMS, RESET_CATALOG_ITEMS} from '../actions/actionTypes';

const initialState = {
    list: [],
    filter: {
        query: '',
        categoryId: '',
        offset: 0,
    },
    loading: false,
    error: null,
    isAll: false,
}

export default function catalogItemsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATALOG_ITEMS_REQUEST:
            return {...state, loading: true, error: null}
        case FETCH_CATALOG_ITEMS_SUCCESS:
            const {list} = action.payload;
            const newList = state.filter.offset === 0 ? list : [...state.list, ...list]
            return {...initialState, list: newList, isAll: list.length < (+process.env.REACT_APP_LOAD_MORE_OFFSET_STEP || 6)};
        case FETCH_CATALOG_ITEMS_FILED:
            const {error} = action.payload;
            return {...state, loading: false, error};
        case SET_FILTER_CATALOG_ITEMS:
            const {filter} = action.payload;
            return {...state, filter: {...state.filter, ...filter}};
        case RESET_FILTER_CATALOG_ITEMS:
            return {...state, filter: {}};
        case RESET_ERROR_CATALOG_ITEMS:
            return {...state, error:null};
        case RESET_CATALOG_ITEMS:
            return {...initialState};
        default:
            return state;
    };
}


catalogItemsReducer.propTypes = {
    state: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([null, PropTypes.string]).isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}
