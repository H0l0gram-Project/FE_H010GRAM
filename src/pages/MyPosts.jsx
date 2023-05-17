import React from "react";
import { styled } from "styled-components";
import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyPosts = () => {
    return (
        <>
            <MainContainer>
                <MainWrap>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example01.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example02.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example03.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example04.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example05.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example06.jpg"} alt="" />
                            <PostInfoWrap>
                                <PostInfo>
                                    <PostText>
                                        <PostHeartIcon />
                                        19.5만
                                    </PostText>
                                    <PostText>
                                        <PostCommentIcon />
                                        95
                                    </PostText>
                                </PostInfo>
                            </PostInfoWrap>
                        </PostFrame>
                    </Link>
                </MainWrap>
            </MainContainer>
        </>
    );
};

export default MyPosts;

const MainContainer = styled.div`
    margin-top: 110px;
`;
const MainWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 5px;
    column-gap: 5px;
`;
const PostInfoWrap = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 22.27%);
`;
const PostFrame = styled.div`
    position: relative;
    &:hover ${PostInfoWrap} {
        display: block;
    }
`;
const PostInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PostHeartIcon = styled(IoMdHeart)`
    font-size: 1.5rem;
    margin-right: 5px;
`;
const PostCommentIcon = styled(FaComment)`
    font-size: 1.5rem;
    margin-left: 1.7rem;
    margin-right: 5px;
`;
const PostText = styled.span`
    font-size: 1rem;
    display: flex;
`;
const Photo = styled.img`
    height: 360px;
`;
