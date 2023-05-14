import React from "react";
import { styled } from "styled-components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <MainContainer>
                <MainWrap>
                    <Link to={`/details/1`}>
                        <PostFrame>
                            <Photo src={process.env.PUBLIC_URL + "/example01.jpg"} alt="" />
                            <PostInfo>
                                <PostText className="likes">
                                    <PostHeartIcon />
                                    1.9만
                                </PostText>
                                {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                                <PostText className="comment">
                                    <PostCommentIcon />
                                    95
                                </PostText>
                            </PostInfo>
                        </PostFrame>
                    </Link>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example02.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example03.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example04.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example05.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example06.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example07.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example08.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                    <PostFrame>
                        <Photo src={process.env.PUBLIC_URL + "/example09.jpg"} alt="" />
                        <PostInfo>
                            <PostText className="likes">
                                <PostHeartIcon />
                                1.9만
                            </PostText>
                            {/* <span className="likes"><IoMdHeartEmpty /></span> */}
                            <PostText className="comment">
                                <PostCommentIcon />
                                95
                            </PostText>
                        </PostInfo>
                    </PostFrame>
                </MainWrap>
            </MainContainer>
        </>
    );
};

export default Main;

const MainContainer = styled.div`
    margin-top: 100px;
`;
const MainWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 5px;
    column-gap: 5px;
`;
const PostInfo = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 800;
    text-align: center;
    line-height: 23rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 22.27%);
`;
const PostFrame = styled.div`
    position: relative;
    &:hover ${PostInfo} {
        display: block;
    }
`;
const PostHeartIcon = styled(IoMdHeart)`
    font-size: 1.5rem;
    margin-right: 5px;
`;
const PostCommentIcon = styled(FaComment)`
    font-size: 1.5rem;
    margin: 0 5px 0 20px;
`;
const PostText = styled.span`
    font-size: 1rem;
`;
const Photo = styled.img`
    height: 360px;
`;
