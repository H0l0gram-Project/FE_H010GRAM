import React from "react";
import { styled } from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TbPhotoStar } from "react-icons/tb";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <NavContainer>
            <div className="logoWrap">
                <Link to={"/"}>
                    <NavLogo src={process.env.PUBLIC_URL + "/H0l0gram_logo.png"} alt="홀로그램 로고" />
                </Link>
            </div>
            <div className="menuWrap">
                <ul>
                    <MenuHover to={"/"}>
                        <Menu>
                            <HomeIcon />
                            HOME
                        </Menu>
                    </MenuHover>
                    <MenuHover to={"/profile"}>
                        <Menu>
                            <ProfileIcon />
                            PROFILE
                        </Menu>
                    </MenuHover>
                    <MenuHover to={"/post"}>
                        <Menu>
                            <PostIcon />
                            POST
                        </Menu>
                    </MenuHover>
                </ul>
            </div>
        </NavContainer>
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
const Menu = styled.li`
    font-size: 1.3rem;
    height: 50px;
    padding: 10px 20px;
`;
const MenuHover = styled(Link)`
    :hover {
        background-color: #f3f3f3;
    }
`;
const HomeIcon = styled(GrHomeRounded)`
    margin-right: 20px;
`;
const ProfileIcon = styled(CgProfile)`
    margin-right: 20px;
`;
const PostIcon = styled(TbPhotoStar)`
    margin-right: 20px;
`;
