import React from 'react'
import styled from 'styled-components'

 const Container = styled.div`
    width: 922px;
    height: auto;
    background-color: #14131A;
    border: 1px solid #413F4B;
    transform: translateX(50%);
    margin-top: 50px;
    border-radius: 20px;
    margin-bottom: 30px;

    @media screen and (max-width: 960px){
        top: 60px;
        transform: translateX(6%);
        position: relative;
        
        width: 90%;
        border-radius: 20px;
        margin-bottom: 140px;
      }
`;

export default Container;
