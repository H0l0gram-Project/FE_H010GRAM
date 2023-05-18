import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import DetailsModal from "./DetailsModal";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../api/post";
import ErrorStatus from "../components/StatusComponents/ErrorStatus";
import LoadingStatus from "../components/StatusComponents/LoadingStatus";
import Cookies from "js-cookie";

const Main = () => {

    const navigate = useNavigate();

    // ^----- 로그인이 안되어있으면 로그인 페이지로 이동 ----- //
    // useEffect(() => {
    //     const token = Cookies.get("token");
    //     if (!token) {
    //         navigate("/login");
    //     }
    // }, [navigate]);

    const [showDetails, setShowDetails] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (event, post) => {
        event.preventDefault();
        setSelectedPost(post);
        setShowDetails(true);
    };

    console.log("error: " + JSON.stringify(localStorage));

    const { isLoading, isError, data } = useQuery("posts", getPosts);

    if (isLoading) {
        return <LoadingStatus />;
    }
    if (isError || !data || !data.data || !data.data.data) {
        return <ErrorStatus />;
    }

    return (
        <>
            <MainContainer>
                <MainWrap>
                    {data.data.data &&
                        data.data.data.map((post) => {
                            return (
                                <Link to={`/details/${post.id}`} key={post.id}>
                                    <PostFrame onClick={(event) => handlePostClick(event, post)}>
                                        <Photo src={post.postImage} alt="포스트이미지" />
                                        <PostInfoWrap>
                                            <PostInfo>
                                                <PostText className="likes">
                                                    <PostHeartIcon />
                                                    {post.liked}
                                                </PostText>
                                                <PostText className="comment">
                                                    <PostCommentIcon />
                                                    {post.commentsCount}
                                                </PostText>
                                            </PostInfo>
                                        </PostInfoWrap>
                                    </PostFrame>
                                </Link>
                            );
                        })}
                </MainWrap>
            </MainContainer>
            {showDetails && <DetailsModal post={selectedPost} onClose={() => setShowDetails(false)} />}
        </>
    );
};

export default Main;

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
