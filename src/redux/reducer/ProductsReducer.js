import { SET_PRODUCTS } from "../action";

export const productsReducer = (state = [], action) => {
    console.log("::: i am inside cart data", action)
    switch (action.type) {
        case SET_PRODUCTS:
            console.log(action)
            return [...action.payload.data, ...state];
        default: return []
    }
}

export const singleProduct = (state = [], action) => {
    switch (action.type) {
        case "FEATURE_PRODUCT":
            const featureData = action.payload.data.filter((curElm) => {
                return curElm.featured === true;
            });
            return [
                ...state, ...featureData
            ]
        default: return [];
    }
}





