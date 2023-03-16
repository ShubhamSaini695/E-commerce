import { combineReducers } from 'redux'
import { productsReducer, singleProduct } from './reducer/ProductsReducer'
import { cartReducer } from './reducer/CartReducer'

export default combineReducers({
    productsReducer,
    singleProduct,
    cartReducer
})