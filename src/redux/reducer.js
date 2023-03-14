import { ADD_TO_CART, SET_PRODUCTS } from "./action";

const initialState = {
    cart: []
};

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


export const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload;

        const cartProduct = {
            id,
            name: product.name,
            color,
            amount,
            image: product.image,
            price: product.price,
            max: product.stock,
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }

    return state;
};
