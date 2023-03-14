import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
//import { applyMiddleware } from '@reduxjs/toolkit';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});
sagas.map(sagaMiddleware.run)


export default store;