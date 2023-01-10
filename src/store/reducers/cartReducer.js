import PropTypes from 'prop-types';
import {RESTORE_CART_STATE, ADD_CART_ITEM, REMOVE_CART_ITEM, RESET_CART} from '../actions/actionTypes';

const initialState = {
    cartItems: [],
};

export default function cartReduscer(state = initialState, action) {
    const storage = window[process.env.REACT_APP_STORAGE] || window.localStorage;
    const storageKey = process.env.REACT_APP_STORAGE_KEY || 'BosaNogaCart';

    switch (action.type) {
        case RESTORE_CART_STATE: {
            const restoredState = restoreCartState(storage, storageKey);
            if (!restoredState) {
                return {...initialState};
            }
            return {...initialState, ...restoredState};
        }
        case ADD_CART_ITEM: {
            const {item: addedItem} = action.payload;
            const newItems = [...state.cartItems];
            const cartItemIndex = newItems.findIndex((item) => compareItems(item, addedItem));
            if (cartItemIndex === -1) {
                newItems.push(addedItem);
            } else {
                newItems[cartItemIndex] = {
                    ...newItems[cartItemIndex],
                    count: newItems[cartItemIndex].count + addedItem.count
                };
            }
            const newState = {...state, cartItems: newItems};
            saveCartState(storage, storageKey, newState);
            return newState;
        }
        case REMOVE_CART_ITEM: {
            const {item: deletingItem} = action.payload;
            const newState = {cartItems: state.cartItems.filter((item) => !compareItems(item, deletingItem))};
            saveCartState(storage, storageKey, newState);
            return newState;
        }
        case RESET_CART: {
            saveCartState(storage, storageKey, initialState)
            return {...initialState};
        }
        default:
            return state;
    };

    function saveCartState(toStorage = storage, key = storageKey, state = initialState) {
        toStorage.setItem(key, JSON.stringify(state));
    }
    
    function restoreCartState(fromStorage = storage, key = storageKey) {
        const state = fromStorage.getItem(key);
        try {
            return JSON.parse(state);
        } catch (error) {
            return null;
        };
    }

    function compareItems(item1, item2) {
        return (
            (item1.id === item2.id) && (item1.size === item2.size)
            );
    }
};


//  PropTypes

cartReduscer.propTypes = {
    state: PropTypes.shape({
        cartItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            size: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.object.isRequired,
    })
}