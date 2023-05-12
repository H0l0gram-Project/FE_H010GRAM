import React from "react";
import { styled } from "styled-components";

const Button = () => {
    return (
        <>
            <StyledPrimaryBtn w="200px" h="50px" bgc="#fff" c="#000" bdr="3px solid #55efc4;" hvbgc="#55efc4" hvc="gray">버튼 예제!</StyledPrimaryBtn>
        </>
    );
};

export default Button;

export const StyledPrimaryBtn = styled.button`
    width: ${props => props.w};
    height: ${props => props.h};
    background-color: ${props => props.bgc};
    border: ${props => props.bdr};
    color: ${props => props.c};
    margin: 5px;
    border-radius: 7px;
    font-weight: bold;
    &:hover {
        background-color : ${props => props.hvbgc};
        color : ${props => props.hvc};
    }
`
