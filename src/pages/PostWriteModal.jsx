import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React from "react";
import { styled } from "styled-components";

const PostWriteModal = ({setText}) => {
    const token = Cookies.get("token");
    const userToken = jwtDecode(token);
    // console.log(userToken)

    const textInputHandler = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <PostWrite>
                <div>
                    <UserInfo>
                        <ProfileImg src={process.env.PUBLIC_URL + "/example02.jpg"} alt="" />
                        <UserNickname>{userToken.nickname}</UserNickname>
                    </UserInfo>
                    <TextWrap>
                        <Text rows={15} placeholder="문구 입력..." onChange={textInputHandler}></Text>
                    </TextWrap>
                </div>
            </PostWrite>
        </>
    );
};

export default PostWriteModal;

const PostWrite = styled.div`
    width: clamp(170px, 30%, 300px);
`;
const UserInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding: 20px;
`;
const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
const UserNickname = styled.span`
    margin-left: 10px;
`;
const TextWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Text = styled.textarea`
    height: 100%;
    resize: none;
    padding: 7px;
`;
