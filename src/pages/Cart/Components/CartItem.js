import React from "react";
import FormatPrice from "../../../converter/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from '../../../redux/action'

const CartItem = ({ id, name, image, color, price, amount }) => {

    const dispatch = useDispatch();

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color:</p>
                        <div
                            className="color-style"
                            style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>
            {/* price   */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity  */}
            <div>{amount}</div>

            {/* //Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => dispatch(removeItem(id))} />
            </div>
        </div>
    );
};

export default CartItem;