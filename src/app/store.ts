import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from '../entities/cart/model/cartSlice'

const rootReducer = combineReducers({
    cart: cartSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export default store