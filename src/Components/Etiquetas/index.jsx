import React from "react";
import styled from "styled-components";

export const Box_Etiquetas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 12%;
`;

export const Etiqueta = styled.p`
    display: flex;
    align-items: center;
    width: 100%;
    height: 6vh;
    justify-content: space-around;
    color:  #69006d;
    margin: 5%;
    background: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 5vh;
    border: none;
    :hover{
        background:  #ca43d6;
        color:  black;
    }
`;
