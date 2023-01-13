import PropTypes from 'prop-types';
import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FILED, RESET_ERROR_PRODUCT, CHANGE_PRODUCT_ACTIVE_SIZE, RESET_ACTIVE_SIZE_PRODUCT, CHANGE_PRODUCT_COUNT} from '../actions/actionTypes';


const initialState = {
    item: {},
    activeSize: null,
    count: 1,
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    const [minCount, maxCount] = [1, 10];
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {...initialState, loading: true};
        case FETCH_PRODUCT_SUCCESS:
            const {item} = action.payload;
            return {...initialState, item};
        case FETCH_PRODUCT_FILED:
            const {error} = action.payload;
            return {...state, loading: false, error};
        case CHANGE_PRODUCT_ACTIVE_SIZE:
            const {size} = action.payload;
            return {...state, activeSize: size};
        case RESET_ACTIVE_SIZE_PRODUCT:
            return {...state, activeSize: null};
        case CHANGE_PRODUCT_COUNT:
            const {step} = action.payload;
            let newCount = state.count + +step;
            if (newCount < minCount) {newCount = minCount;}
            if (newCount > maxCount) {newCount = maxCount;}
            return {...state, count: newCount}
        case RESET_ERROR_PRODUCT:
            return {...state, error: null};
        default:
            return state;
    };
}

productReducer.propTypes = {
    state: PropTypes.shape({
        item: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOf([null, PropTypes.string]).isRequired,
        activeSize: PropTypes.oneOf([null, PropTypes.string]).isRequired,
        count: PropTypes.number.isRequired
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}