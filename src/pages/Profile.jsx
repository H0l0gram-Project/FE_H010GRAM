import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <PageContainer>
      <MenuWrapper>
        <MenuContainer1>
          <h2>계정 센터</h2>
          <p>Meta 테크놀로지에서 연결된 환경 및 계정 설정을 관리해보세요.</p>
          <MenuItem>개인정보</MenuItem>
          <MenuItem>비밀번호 및 보안</MenuItem>
          <MenuItem>광고 기본 설정</MenuItem>
          <MenuItem>계정 센터에서 더 보기</MenuItem>
        </MenuContainer1>
        <MenuContainer2>
          <h2>프로필 편집</h2>
          <MenuItem>앱 및 웹사이트</MenuItem>
          <MenuItem>이메일 알림</MenuItem>
          <MenuItem>푸시 알림</MenuItem>
          <MenuItem>내가 볼 수 있는 내용</MenuItem>
          <MenuItem>내 콘텐츠를 볼 수 있는 사람</MenuItem>
          <MenuItem>다른 사람이 나와 소통할 수 있는 방법</MenuItem>
          <MenuItem>관리 감독</MenuItem>
          <MenuItem>도움말</MenuItem>
          <MenuItem>프로페셔널 계정으로 전환</MenuItem>
        </MenuContainer2>
      </MenuWrapper>
      <ContentContainer>
        <Container>
          <ProfilePicture
            src={process.env.PUBLIC_URL + "/example03.jpg"}
            alt="Profile"
          />
          <div>
            <h2>tkfkd57321</h2>
            <h2>프로필 사진 바꾸기</h2>
          </div>
        </Container>
        <LabelContainer>
          <Label>웹사이트</Label>
          <Input type="text" />
        </LabelContainer>
        <p>
          링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여
          프로필의 소개에서 웹사이트를 변경하여 수정하세요.
        </p>
        <LabelContainer>
          <Label>소개</Label>
          <Input type="text" maxLength="150" />
        </LabelContainer>
        <Label>성별</Label>
        <p>이 정보는 공개 프로필에 포함되지 않습니다.</p>
        <Label>프로필에 계정 추천 표시</Label>
        <p>
          사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와
          회원님의 계정이 다른 프로필에서 추천될 수 있는지를 선택하세요.[?]
        </p>
        <SubmitButton type="submit">제출</SubmitButton>
      </ContentContainer>
    </PageContainer>
  );
};

export default Profile;

const PageContainer = styled.div`
  display: flex;
  height: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px; // 가로를 늘립니다.
  padding: 0px;
  box-sizing: border-box;
  margin-top: 50px;
`;

const MenuContainer = styled.div`
  border: 1px solid gray;
  padding: 10px;
`;

const MenuContainer1 = styled(MenuContainer)``;

const MenuContainer2 = styled(MenuContainer)``;

const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid gray;
  flex-grow: 1;
  box-sizing: border-box;
  margin-top: 50px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-right: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;
const Container = styled.div`
  display: flex;
`