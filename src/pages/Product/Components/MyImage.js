import React from 'react'
import styled from "styled-components";

const MyImage = ({ imgs }) => {
    return (
        <Wrapper>
            <div className='main-screen'>
                <img src={imgs} alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    img {
        max-width:100%
        max-heigth:100%
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
   }
`;

export default MyImage