import React, { useRef, useState } from "react";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { styled } from "styled-components";

const PostUploadPhotoModal = ({ img, setImg }) => {
    const [imgUrl, setImgUrl] = useState('jpg');

    // input file 클릭 되도록
    const imgInput = useRef();

    const reader = new FileReader();

    // // 이미지 파일의 확장자 (예: png, jpeg, jpg 등)
    // let extension = imgUrl?.split(".")[1]; 
    
    // // 이미지 종류에 따른 type 반환
    // switch (extension) {
    //     case "png":
    //         extension = "image/png";
    //         break;
    //     case "jpeg":
    //     case "jpg":
    //         extension = "image/jpeg";
    //         break;
    //     default:
    //         // 기본적으로 jpeg 타입으로 설정
    //         extension = "image/jpeg";
    // }

    const imgBlob = new Blob([img], { type: 'image/jpg' });

    const clickUploadBtnHandler = () => {
        imgInput.current.click();
    };

    const changeImgFileHandler = (e) => {
        const imgFile = e.target.files[0];
        setImg(imgFile);
        reader.readAsDataURL(imgFile);
        reader.onload = () => {
            setImgUrl(reader.result);
        };
    };

    return (
        <>
            {img ? (
                <Container>
                    <PreviewBox>
                        <PreviewImg src={URL.createObjectURL(imgBlob)} alt="사용자가 올린 이미지" />
                    </PreviewBox>
                    <PostBox></PostBox>
                </Container>
            ) : (
                <UploadBox>
                    <Icon />
                    <Text>사진을 올려주세요!</Text>
                    <input type="file" style={{ display: "none" }} ref={imgInput} onChange={changeImgFileHandler} />
                    <UploadBtn onClick={clickUploadBtnHandler}>컴퓨터에서 선택</UploadBtn>
                </UploadBox>
            )}
        </>
    );
};

export default PostUploadPhotoModal;

const UploadBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(1px, calc(100vw - 40px), 600px);
    aspect-ratio: 1;
`;
const Icon = styled(MdOutlinePhotoLibrary)`
    font-size: 5rem;
    margin-bottom: 10px;
`;
const Text = styled.div`
    font-size: 1.3rem;
    margin-bottom: 20px;
`;
const UploadBtn = styled.button`
    cursor: pointer;
    background-color: #0095f6;
    border-radius: 7px;
    font-size: 0.9rem;
    padding: 5px 10px;
    color: #fff;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: clamp(1px, calc(100vw - 40px), 600px);
    aspect-ratio: 1;
    position: relative;
`;
const PreviewBox = styled.div``;
const PreviewImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;
const PostBox = styled.div``;
