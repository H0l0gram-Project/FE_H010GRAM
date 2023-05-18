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
    const userToken = jwtDecode(token);
    console.log(userToken)

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
        let profilePhoto = '';
        
        if(userToken.memberImage) {
            profilePhoto = `${userToken.memberImage}`
        }else{
            profilePhoto = `'/H0l0GRAM_Profile.png'`
        }

        return profilePhoto;
    }

    return (
        <>
            {modalOpen && <PostModalLayout setModalOpen={setModalOpen} />}
            {isLoggedIn ? (<NavContainer>
                <div className="logoWrap">
                    <Link to={"/"}>
                        <NavLogo src={process.env.PUBLIC_URL + "/H0l0gram_logo.png"} alt="홀로그램 로고" />
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
            </NavContainer>) : <Header />}
            
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
    background-image:url(${(props) => props.url}); 
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
