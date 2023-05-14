import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BiLogInCircle } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrap>
                <div>
                    <Link to={"/"}>
                        <HeaderLogo src={process.env.PUBLIC_URL + "/H0l0GRAM_logo.png"} alt="홀로그램 로고" />
                    </Link>
                </div>
                <BtnWrap>
                    <div>
                        <BtnLoginIcon />
                        <BtnText>로그인</BtnText>
                    </div>
                    <div>
                        <BtnSignupIcon />
                        <BtnText>회원가입</BtnText>
                    </div>
                </BtnWrap>
            </HeaderWrap>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    /* display: none; */
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #DBDBDB;
`;
const HeaderWrap = styled.div`
    max-width: 935px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
const HeaderLogo = styled.img`
    background-color: #fff;
    width: 170px;
`;
const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
`
const BtnLoginIcon = styled(BiLogInCircle)`
    color: #303030;
    font-size: 2rem;
    cursor: pointer;
`
const BtnSignupIcon = styled(BsPersonPlusFill)`
    color: #303030;
    font-size: 2rem;
    cursor: pointer;
    margin-left: 20px;
`
const BtnText = styled.span`
    display: none;
`;
