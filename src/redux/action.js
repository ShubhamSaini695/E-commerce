export const ADD_TO_CART = "@cart/ADD_TO_CART";
export const SET_PRODUCTS = "@products/SET_PRODUCTS"

export const addToCart = (id, color, amount, product) => {
    return {
        type: ADD_TO_CART,
        payload: { id, color, amount, product }
    };
};

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    };
};

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    };
};

export const cartItemsPriceTotal = () => {
    return {
        type: "CART_ITEM_PRICE_TOTAL"
    };
};