import React, { useState } from "react";
import { styled } from "styled-components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import DetailsModal from './DetailsModal';


const Main = () => {
    const [showDetails, setShowDetails] = useState(false); // Details를 보여줄지 말지를 결정하는 state를 추가
    const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지를 저장하는 state를 추가

    const handlePostClick = (image) => { // Post를 클릭했을 때의 핸들러를 추가
        setSelectedImage(image);
        setShowDetails(true);
    };

    return (
        <>
            <MainContainer>
                <MainWrap>
                    {[...Array(9).keys()].map(i => (
                        <PostFrame onClick={() => handlePostClick(`/example0${i+1}.jpg`)}>
                            <Photo src={process.env.PUBLIC_URL + `/example0${i+1}.jpg`} alt="" />
                            <PostInfo>
                                <PostText className="likes">
                                    <PostHeartIcon />
                                    1.9만
                                </PostText>
                                <PostText className="comment">
                                    <PostCommentIcon />
                                    95
                                </PostText>
                            </PostInfo>
                        </PostFrame>
                    ))}
                </MainWrap>
            </MainContainer>
            {showDetails && <DetailsModal image={selectedImage} onClose={() => setShowDetails(false)} />}
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
