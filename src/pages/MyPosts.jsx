import React, { useState } from "react";
import { styled } from "styled-components";
import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMyPosts } from "../api/post";
import { useQuery } from "react-query";
import LoadingStatus from "../components/StatusComponents/LoadingStatus";
import ErrorStatus from "../components/StatusComponents/ErrorStatus";
import DetailsModal from "./DetailsModal";

const MyPosts = () => {
    const [showDetails, setShowDetails] = useState(false); // Details를 보여줄지 말지를 결정하는 state를 추가
    const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지를 저장하는 state를 추가

    const handlePostClick = (image) => {
        // Post를 클릭했을 때의 핸들러를 추가
        setSelectedImage(image);
        setShowDetails(true);
    };

    const { isLoading, isError, data } = useQuery("posts", getMyPosts);

    // console.log(data);

    if (isLoading) {
        return <LoadingStatus />;
    }
    if (isError) {
        return <ErrorStatus />;
    }

    return (
        <>
            <MainContainer>
                <MainWrap>
                    {( !data.data.data || data.data.data === []) ? <NullData>데이터가 없습니다 😅</NullData> :
                        data.data.data.map((post) => {
                            return (
                                <Link to={`/details/${post.id}`} key={post.id}>
                                    <PostFrame onClick={() => handlePostClick(post.postImage)}>
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
            {showDetails && <DetailsModal image={selectedImage} onClose={() => setShowDetails(false)} />}
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
const NullData = styled.div`
    white-space: nowrap;
    font-size: 2rem;
`
