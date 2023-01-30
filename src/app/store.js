import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import chartReducer from '../features/overview/chartFeatures'
import authReducer from '../features/auth/authState'
import orderReducer from '../features/orders/orderState'
import orderWindowReducer from '../features/orderWindowState'
import positionsReducer from '../features/positions/positionsState'

const store = configureStore({
    reducer: {
        orderWindow: orderWindowReducer,
        chartData: chartReducer,
        authData: authReducer,
        ordersData: orderReducer,
        positionsData: positionsReducer,
        
    },
    
})

setupListeners(store.dispatch);


export default store;