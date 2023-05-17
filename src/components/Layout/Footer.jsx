import React from "react";
import { styled } from "styled-components";

const Footer = () => {
    return (
        <StFooterWrap>
            <StFooterContents>
                Copyright 2023. J & H <br />
                All rights reserved.
            </StFooterContents>
        </StFooterWrap>
    );
};

export default Footer;

const StFooterWrap = styled.div`
    text-align: center;
    padding: 70px 0 30px;
`;
const StFooterContents = styled.p`
    color: gray;
`;
