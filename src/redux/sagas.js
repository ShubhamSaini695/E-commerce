import { call, put, takeLatest } from "redux-saga/effects"
import { getAPI } from "../server"
import { SET_PRODUCTS } from "./action";

const getProducts = function* () {
    try {
        const url = "/product";
        const resp = yield call(getAPI, url);
        console.log("watchers called", resp)
        yield put({
            type: SET_PRODUCTS,
            payload: resp
        })
    } catch (error) {
        yield put({
            type: SET_PRODUCTS,
            payload: error
        })
    }
}

export function* getFeatureProduct() {
    try {
        const url = "/product";
        const resp = yield call(getAPI, url);
        console.log("watchers called", resp)
        yield put({
            type: 'FEATURE_PRODUCT',
            payload: resp
        })
    } catch (error) {
        yield put({
            type: 'FEATURE_PRODUCT',
            payload: error
        })
    }
}

export const sagas = [
    function* watchers() {
        yield takeLatest("REQUEST_PRODUCTS", getProducts)
        yield takeLatest("REQUEST_FEATURE_PRODUCT", getFeatureProduct)
    },
]