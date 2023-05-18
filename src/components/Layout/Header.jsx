import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BiLogInCircle } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import Cookies from "js-cookie";

const Header = () => {
    // 로그인 상태를 위한 useState 선언
    // Cookies.get("token")
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

    return (
        <>
            {isLoggedIn ? null : (
                <HeaderContainer>
                    <HeaderWrap>
                        <div>
                            <Link to={"/"}>
                                <HeaderLogo src={'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flh3.googleusercontent.com%2FzFWk4zcnlsrjZlzIfe4NCa8odPTvugQKO6PRafjIyMHkWgxUttDafSUe-GUtSs9ptSr5iodnUaIGxIJL8LjMYJXZVcCUfYDFbSX-t2MeVUhrdC9Jfw_TOr-bVei63hTyRnGJNgIhN9samnn8Q__f8nU7Tm1XJif7FTn8WkzhkIsBUaTLFW2TC4TXBJnW8GbuGxenRQy7g_1X1pRPaKEHlG8shem1jrglP6tWGi27ovQO9DD0mUhyDWZE7tlW4bagi1K7INiG0k36EOUfTHPIPkld_uQR82rRB_vcN-CEc9fy7QiwJdjtLHVSeqBGgSaUjb94FAEwBdDDPwYkYl6b28rubBz-x-2nNEfBqVWdL87RfrTdeUpcC83H3uIE7zCjVGzdaKYbFcl2tjcZTg942PZKMjaMytPBOH-1O0Ek4S-snkGjxryFltm1Er8sadnURn0YAMwtGeZ_lOnF_Pq10ne04iBB1kIwsklw-oy-5u7Fn6jZDpS726WSH7TRZ1S334V-_LAFnPesQcnL8jS2KBS2yrcXsLOYnp1jhTHYP6Z7Ddqo4KJXIGl-9a2FUbswFgq8ODu0UAuegZ89TVeM9lt1DpYS74szIdZmWtBn6X0KTU26xJdbX7iB5GxMmRpec8hOaNhsP6Vzlz030NOW4qUm5AUMTOE6_hQ7isC_aU2p53_Qi8H16awIeDf86IUQLz3xv4RwDlofHlsm-5bRd-L8ZMZb6qjcxCLW_6br3qd9WOU0anKjx02c5TLjRqSH1oRYmoxg88vUBosVYvykrKsaTUfhqvLRtPAuHAJ4ErWRlwBtgBQL_bzHGeIl7b3N_XvYSfgp6OznaltghZXfuJv6mCd7oP6Iortu6AWevOvf4G6uanGKi_rjjU_-JZYIzGOivevRlaqlWiuxWAy9GB8kPt_AZvv1p_NmXuGwEMN9'} alt="홀로그램 로고" />
                            </Link>
                        </div>
                        <BtnWrap>
                            <div>
                                <Link to={"/login"}>
                                    <BtnLoginIcon />
                                </Link>
                                <BtnText>로그인</BtnText>
                            </div>
                            <div>
                                <Link to={"/signup"}>
                                    <BtnSignupIcon />
                                </Link>
                                <BtnText>회원가입</BtnText>
                            </div>
                        </BtnWrap>
                    </HeaderWrap>
                </HeaderContainer>
            )}
        </>
    );
};

export default Header;

const HeaderContainer = styled.div`
    /* display: none; */
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
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
`;
const BtnLoginIcon = styled(BiLogInCircle)`
    color: #303030;
    font-size: 2rem;
    cursor: pointer;
`;
const BtnSignupIcon = styled(BsPersonPlusFill)`
    color: #303030;
    font-size: 2rem;
    cursor: pointer;
    margin-left: 20px;
`;
const BtnText = styled.span`
    display: none;
`;
