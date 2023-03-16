//import { useEffect } from "react";
import { ADD_TO_CART } from "../action";

//useEffect(() => {
//    localStorage.setItem("Cart", JSON.stringify(state.cart))
//}, [state.cart])

const initialState = {
    cart: [],
    total_items: '',
    total_price: '',

};

export const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload;

        const existingProduct = state.cart.find(
            (curItem) => curItem.id === id + color
        );

        if (existingProduct) {
            const updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === id + color) {
                    let newAmount = curElem.amount + amount;

                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount: newAmount,
                    };
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        }

        else {
            const cartProduct = {
                id: id + color,
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

    if (action.type === "CART_ITEM_PRICE_TOTAL") {
        const { total_item, total_price } = state.cart.reduce(
            (initialVal, curElem) => {
                let { price, amount } = curElem;

                initialVal.total_item += amount;
                initialVal.total_price += price * amount;

                return initialVal;
            },
            {
                total_item: 0,
                total_price: 0,
            }
        );
        return {
            ...state,
            total_item,
            total_price,
        };
    }

    return state;
};