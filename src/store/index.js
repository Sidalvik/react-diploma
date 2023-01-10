import { configureStore } from '@reduxjs/toolkit';
import headerSearchReducer from './reducers/headerSearchReducer';
import catalogSearchReducer from './reducers/catalogSearchReducer';
import categoriesReducer from './reducers/categoriesReducer';
import topsalesReducer from './reducers/topsalesReduser';
import catalogItemsReducer from './reducers/catalogItemsReducer';
import productReducer from './reducers/productReducer';
import cartReduscer from './reducers/cartReducer';
import orderReduser from './reducers/orderReducer';


const store = configureStore({
    reducer : {
        headerSearch: headerSearchReducer,
        catalogSearch: catalogSearchReducer,
        categories: categoriesReducer,
        topsales: topsalesReducer,
        catalogItems: catalogItemsReducer,
        product: productReducer,
        cart: cartReduscer,
        order: orderReduser,
    },
})

export default store;
