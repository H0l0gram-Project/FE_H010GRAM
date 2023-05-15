import React from 'react'
import { styled } from 'styled-components';
import Layout from "../components/Layout/Layout";
import { IoClose } from "react-icons/io5";

const PostModalLayout = () => {
  return (
    <>
            <ModalOverlay></ModalOverlay>
            <CloseBtn></CloseBtn>
            <ModalWrap>
                <ModalInner>
                    <Title>새 게시물 만들기</Title>
                </ModalInner>
            </ModalWrap>
            <Layout />
        </>
  )
}

export default PostModalLayout

const ModalOverlay = styled.div`
    box-sizing: border-box;
    /* display: ${(props) => (props.visible ? "block" : "none")}; */
    position: fixed;
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
    /* display: ${(props) => (props.visible ? "block" : "none")}; */
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
    width: 35%;
    height: 75%;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 8px 32px 0 rgba(155, 152, 152, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    background-color: #fff;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    /* padding: 40px 20px; */
`;
const CloseBtn = styled(IoClose)`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2rem;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    z-index: 10;
`
const Title = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #DBDBDB;
`