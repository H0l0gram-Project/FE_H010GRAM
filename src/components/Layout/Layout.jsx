import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyle from "../GlobalStyle";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Nav />
            <LayoutContainer>
                <Wrapper>{children}</Wrapper>
                <Footer />
            </LayoutContainer>
        </>
    );
};

export default Layout;

const LayoutContainer = styled.div`
    max-width: 935px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    /* transform: translate(122px); */
`;
const Wrapper = styled.div`
    overflow-y: visible;
    min-height: 80vh;
`;
