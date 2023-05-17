import React, { useState } from "react";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import PostPhotoUploadModal from "./PostUploadPhotoModal";
import PostWriteModal from "./PostWriteModal";

const PostModalLayout = (props) => {
    const [tab, setTab] = useState(1);

    const clickPrevBtnHandler = () => {
        setTab(tab - 1);
    };

    const clickNextBtnHandler = () => {
        setTab(tab + 1);
    };

    const clickModalCloseHandler = () => {
        props.setModalOpen(false);
    };

    const clickNoBubbleHandler = (e) => {
        e.stopPropagation();
    };

    const submitHandler = () => {
        
    };

    return (
        <div>
            <ModalOverlay>
                <CloseBtn onClick={clickModalCloseHandler} />
                <ModalWrap onClick={clickModalCloseHandler} />
                <ModalInner onClick={clickNoBubbleHandler}>
                    <Title>
                        {tab !== 1 ? (
                            <Prev onClick={clickPrevBtnHandler}>
                                <BiArrowBack />
                            </Prev>
                        ) : null}
                        <div>새 게시물 만들기</div>
                        {tab >= 1 && tab < 2 ? <Next onClick={clickNextBtnHandler}>다음</Next> : null}
                    </Title>
                    <PageBox>
                        <PostPhotoUploadModal />
                        {/* 모달 두 번째 페이지 */}
                        {tab === 2 && <PostWriteModal />}
                        {tab === 2 && <Next onClick={submitHandler}>공유하기</Next>}
                    </PageBox>
                </ModalInner>
            </ModalOverlay>
        </div>
    );
};

export default PostModalLayout;

const ModalOverlay = styled.div`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
    z-index: 1;
`;
const ModalWrap = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    overflow: auto;
    outline: 0;
`;
const ModalInner = styled.div`
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    margin: 0 auto;
    z-index: 20;
`;
const CloseBtn = styled(IoClose)`
    position: fixed;
    top: 0;
    right: 0;
    font-size: 2rem;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    z-index: 10;
`;
const Title = styled.div`
    width: 100%;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #dbdbdb;
`;
const Next = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    color: #0095f6;
`;
const Prev = styled.button`
    position: absolute;
    top: 9px;
    left: 20px;
    font-size: 1.8rem;
`;
const PageBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`