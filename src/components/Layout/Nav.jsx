import React, { useState } from "react";
import { styled } from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { BsPlusSquare } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import PostModalLayout from "../../pages/PostModalLayout";
import { FaRegStickyNote } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Cookies from "js-cookie";
import Header from "./Header";
import jwtDecode from "jwt-decode";

const Nav = () => {
    const token = Cookies.get("token");
    let userToken = "";
    if (token) {
        userToken = jwtDecode(token);
    }

    // 모달 창 상태 관리
    const [modalOpen, setModalOpen] = useState(false);

    // 로그인 상태를 위한 useState 선언
    // Cookies.get("token") :
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));

    const navigate = useNavigate();

    const modalOpenHandler = () => {
        setModalOpen(!modalOpen);
    };

    // 실행시 로그아웃이 되는 함수. 쿠키에서 token값을 삭제함.
    const LogoutHandler = () => {
        Cookies.remove("token");
        setIsLoggedIn(false);
        navigate("/");
    };

    // 프로필 사진 없으면 기본 사진으로 나오기
    const profilePhoto = () => {
        let profilePhoto = "";

        if(userToken.memberImage) {
            profilePhoto = `${userToken.memberImage}`
        }else{
            profilePhoto = 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flh3.googleusercontent.com%2FLOqlAC95Hb53bSCn4fhBF0DIbHJZoj3hq-IMLTlF3vxLoaUhoK0L2LeLfwZvrtlnbUgNsp29cJvbvpw_1RHbSygvFxILNyn2k_CSapDEL93hlHMhhoOl9UD1Yv6_4lRdXi7AjCbsYlp-C6qA_6GheFkRhs8HdG9b11TJKlO6ONyvvgxxi8-7cuEB3h09rlcfVAZziuJE4kv4ep9hkeQBhW4_-L4ZyZbgkD2k257L3Y6pn4iZSaQB5rpDf6CUznNUsPNeuDy5zKZ17BjqOqkaltP_WTe06yRj4F3MNdVgBxGmS-n1Dm_FHVq9Gm8O37oXok4qAFVLD7JfiGUKbAD6lyqyy0JhTVbfx7z7EjeEF6vLkksRv0wdtHkZnYp8JTmyu4HqDLN2Jipd9fcXII_CXPKKlpklpUTKvWfmQo_F9PAJXzS5Mld9c9T0MM5WvvB7lHexcYf1eyEzUOeHqw-lTWqYbkreIPjAOcm281xxXWY7QzWJvT2pF93SyGvpoX0xTdWkUnj80880VVzvzKM_VUCqxTxpfzhMmFCjUAnf95LJu4XyGrIGjlddXosWp_8f58Lv8E3qQa75TCXR07lKNHuonJKuggw2gk69wLGwtIpcBYDvg0qudAylc8UmL9E_afmEs8T6kgmCpMNJhvjCheelzxg3sHdhUiTT2SykgMsJLmK0622cWYKQltlkGsYYKZgmBT1if-EO_osLKAdyA0-mCfDK9ByIQtfLXufQMURbG_Y2XMXNKft_YneAQAzyJNzjJpxMI2l2xfxX8Q_14dJGfWKHUNk7_HLxnKcPMo-zzQKc1iOaBGnMGoGCrLwy05xw_2qQ7h4_KkDCm2JLa4w9jK5X2yI9K7sYEgFBjfj-XUlNIee1Gx3IY0gqs-SoPDGv-TBFeC7rNuxyjnkWDo5Xp-kBSOeV1yIOPjfwwA6j'
        }

        return profilePhoto;
    };

    return (
        <>
            {modalOpen && <PostModalLayout setModalOpen={setModalOpen} />}
            {isLoggedIn ? (
                <NavContainer>
                    <div className="logoWrap">
                        <Link to={"/"}>
                            <NavLogo src={'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flh3.googleusercontent.com%2FzFWk4zcnlsrjZlzIfe4NCa8odPTvugQKO6PRafjIyMHkWgxUttDafSUe-GUtSs9ptSr5iodnUaIGxIJL8LjMYJXZVcCUfYDFbSX-t2MeVUhrdC9Jfw_TOr-bVei63hTyRnGJNgIhN9samnn8Q__f8nU7Tm1XJif7FTn8WkzhkIsBUaTLFW2TC4TXBJnW8GbuGxenRQy7g_1X1pRPaKEHlG8shem1jrglP6tWGi27ovQO9DD0mUhyDWZE7tlW4bagi1K7INiG0k36EOUfTHPIPkld_uQR82rRB_vcN-CEc9fy7QiwJdjtLHVSeqBGgSaUjb94FAEwBdDDPwYkYl6b28rubBz-x-2nNEfBqVWdL87RfrTdeUpcC83H3uIE7zCjVGzdaKYbFcl2tjcZTg942PZKMjaMytPBOH-1O0Ek4S-snkGjxryFltm1Er8sadnURn0YAMwtGeZ_lOnF_Pq10ne04iBB1kIwsklw-oy-5u7Fn6jZDpS726WSH7TRZ1S334V-_LAFnPesQcnL8jS2KBS2yrcXsLOYnp1jhTHYP6Z7Ddqo4KJXIGl-9a2FUbswFgq8ODu0UAuegZ89TVeM9lt1DpYS74szIdZmWtBn6X0KTU26xJdbX7iB5GxMmRpec8hOaNhsP6Vzlz030NOW4qUm5AUMTOE6_hQ7isC_aU2p53_Qi8H16awIeDf86IUQLz3xv4RwDlofHlsm-5bRd-L8ZMZb6qjcxCLW_6br3qd9WOU0anKjx02c5TLjRqSH1oRYmoxg88vUBosVYvykrKsaTUfhqvLRtPAuHAJ4ErWRlwBtgBQL_bzHGeIl7b3N_XvYSfgp6OznaltghZXfuJv6mCd7oP6Iortu6AWevOvf4G6uanGKi_rjjU_-JZYIzGOivevRlaqlWiuxWAy9GB8kPt_AZvv1p_NmXuGwEMN9'} alt="홀로그램 로고" />
                        </Link>
                    </div>
                    <div className="menuWrap">
                        <div>
                            <MenuHover to={"/"}>
                                <Menu>
                                    <HomeIcon />
                                    <span>홈</span>
                                </Menu>
                            </MenuHover>
                            <MenuHover onClick={modalOpenHandler}>
                                <Menu>
                                    <WritePostIcon />
                                    <span>만들기</span>
                                </Menu>
                            </MenuHover>
                            <MenuHover to={"/myposts"}>
                                <Menu>
                                    <ReadPostIcon />
                                    <span>내 포스트</span>
                                </Menu>
                            </MenuHover>
                            <MenuHover to={"/profile"}>
                                <Menu>
                                    <ProfileIcon url={profilePhoto()} />
                                    <span>프로필</span>
                                </Menu>
                            </MenuHover>
                            <MenuHover onClick={LogoutHandler}>
                                <Menu>
                                    <LogoutIcon />
                                    <span>로그아웃</span>
                                </Menu>
                            </MenuHover>
                        </div>
                    </div>
                </NavContainer>
            ) : (
                <Header />
            )}
        </>
    );
};

export default Nav;

const NavContainer = styled.div`
    /* display: none; */
    width: 244px;
    height: 100%;
    position: fixed;
    top: 0;
    border-right: 1px solid #e5e5e5;
`;
const NavLogo = styled.img`
    width: 135px;
    margin: 30px 20px 50px;
`;
const Menu = styled.div`
    font-size: 1rem;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;
const MenuHover = styled(Link)`
    :hover {
        background-color: #f3f3f3;
    }
`;
const HomeIcon = styled(GrHomeRounded)`
    display: inline;
    font-size: 1.5rem;
    margin-right: 20px;
`;
const ProfileIcon = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 15px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`;
const WritePostIcon = styled(BsPlusSquare)`
    display: inline;
    font-size: 1.5rem;
    margin-right: 20px;
`;
const ReadPostIcon = styled(FaRegStickyNote)`
    display: inline;
    font-size: 1.5rem;
    margin-right: 20px;
`;
const LogoutIcon = styled(MdLogout)`
    display: inline;
    font-size: 1.5rem;
    margin-right: 20px;
`;
