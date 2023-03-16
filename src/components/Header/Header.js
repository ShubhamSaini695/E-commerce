import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Components/Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div>
          <h1 className="logo">Shubham Rara</h1>
        </div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

div[
justify-content:center;
]
  .logo{
    height: 2rem;
  }
`;

export default Header;