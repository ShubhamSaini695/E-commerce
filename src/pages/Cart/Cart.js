import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { clearCart } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import CartItem from './Components/CartItem'

const Cart = () => {

  const data = useSelector((state) => state.cartReducer)
  useEffect(() => {

  })
  const dispatch = useDispatch();
  const items = data.cart;
  console.log("items in cart are", items)

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>

        <div className="cart-item">
          {items.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
      <hr />

      <div className="cart-two-button">
        <NavLink to="/products">
          <Button> continue Shopping </Button>
        </NavLink>
        <Button className="btn btn-clear" onClick={() => dispatch(clearCart())}>
          clear cart
        </Button>
      </div>
    </Wrapper >
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  font-size: 1.4rem;
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .color-style {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
      }
    }
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    .btn-clear {
      background-color: #e74c3c;
    }
  }
  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
  //
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

  }
`;

export default Cart;