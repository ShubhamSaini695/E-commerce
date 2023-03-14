import { combineReducers } from 'redux'
import { productsReducer, singleProduct, cartReducer } from './reducer'
export default combineReducers({
    productsReducer,
    singleProduct,
    cartReducer
})