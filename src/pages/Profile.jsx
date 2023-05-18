import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from 'js-cookie';
import { useQuery } from "react-query";
import { getMyProfile } from "../api/profile";
import LoadingStatus from "../components/StatusComponents/LoadingStatus";
import ErrorStatus from "../components/StatusComponents/ErrorStatus";
import jwtDecode from "jwt-decode";

const Profile = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const token = Cookies.get('token');
  //       console.log(token);
  //       const config = { headers: { Authorization: `${token}` } };
  //       const res = await axios.get('https://99gram.store/api/members/${user.id}', config);
  //       setUser(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // if (!user) return "Loading...";
  const token = Cookies.get("token");
  const userToken = jwtDecode(token);

  console.log(userToken)

  const { isLoading, isError, data } = useQuery(`profile${userToken.memberId}`, () =>
  getMyProfile(userToken.memberId),
);

    if (isLoading) {
        return <LoadingStatus />;
    }
    if (isError || !data || !data.data || !data.data.data) {
        return <ErrorStatus />;
    }

    console.log(data)

  return (
    <PageContainer>
      <MenuWrapper>
        <MenuContainer1>
          <Title>계정 센터</Title>
          <Paragraph>
            Meta 테크놀로지에서 연결된 환경 및 계정 설정을 관리해보세요.
          </Paragraph>
          <StyledMenuItem>개인정보</StyledMenuItem>
          <StyledMenuItem>비밀번호 및 보안</StyledMenuItem>
          <StyledMenuItem>광고 기본 설정</StyledMenuItem>
          <SpecialMenuItem>계정 센터에서 더 보기</SpecialMenuItem>
        </MenuContainer1>
        <MenuContainer2>
          <MenuItem>프로필 편집</MenuItem>
          <MenuItem>앱 및 웹사이트</MenuItem>
          <MenuItem>이메일 알림</MenuItem>
          <MenuItem>푸시 알림</MenuItem>
          <MenuItem>내가 볼 수 있는 내용</MenuItem>
          <MenuItem>내 콘텐츠를 볼 수 있는 사람</MenuItem>
          <MenuItem>다른 사람이 나와 소통할 수 있는 방법</MenuItem>
          <MenuItem>관리 감독</MenuItem>
          <MenuItem>도움말</MenuItem>
          <MenuItemBold>프로페셔널 계정으로 전환</MenuItemBold>
        </MenuContainer2>
      </MenuWrapper>
      <ContentContainer>
        <Header>프로필 편집</Header>

        <ProfileSection>
          <LabelContainer>
            <ProfilePicture
              src={`${userToken.profileImage}`}
              alt="Profile"
            />
            <div>
              <h2>{userToken.nickname}</h2>
              <SubHeader>프로필 사진 바꾸기</SubHeader>
            </div>
          </LabelContainer>
          <LabelContainer>
            <Label>웹사이트</Label>
            <div>
              <Input type="text" />
              <SmallText>
                링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여
                프로필의 소개에서 웹사이트를 변경하여 수정하세요.
              </SmallText>
            </div>
          </LabelContainer>
        </ProfileSection>

        <DetailsSection>
          <LabelContainer>
            <Label>소개</Label>
            <Input type="text" maxLength="150" height="150px" />
          </LabelContainer>
          <LabelContainer>
            <Label>성별</Label>
            <div>
              <StyledSelect>
                <option>여성</option>
                <option>남성</option>
                <option>기타</option>
              </StyledSelect>
              <SmallText>이 정보는 공개 프로필에 포함되지 않습니다.</SmallText>
            </div>
          </LabelContainer>
          <LabelContainer>
            <Label>프로필에 계정 추천 표시</Label>
            <SmallText2>
              사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와
              회원님의 계정이 다른 프로필에서 추천될 수 있는지를 선택하세요.[?]
            </SmallText2>
          </LabelContainer>
          <LabelContainer>
          <div>   
          <SubmitButton type="submit">제출</SubmitButton>
          </div>
          </LabelContainer>
        </DetailsSection>
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
  font-size: 14px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  border: 1px solid gray;
  flex-grow: 1;
  box-sizing: border-box;
  margin-top: 50px;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start; // 아이템들이 시작점에서 시작하도록 합니다.
  gap: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-right: 10px;
  min-width: 100px;
`;

const Input = styled.input`
  // flex-grow: 1;
  border: 1px solid gray; // 테두리를 추가합니다.
  padding: 5px; // 패딩을 추가하여 입력란 안쪽에 공간을 만듭니다.
  border-radius: 4px; // 테두리를 둥글게 만듭니다.
  height: ${props => props.height || '25px'};
  width: 50%;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-size: 12px; // 폰트 크기를 조절합니다.
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 12px; // 폰트 크기를 조절합니다.
`;

const SpecialMenuItem = styled(MenuItem)`
  font-size: 14px; // 폰트 크기 조절
  color: blue; // 폰트 색상 조절
  font-weight: bold; // 폰트 굵기 조절
`;

const Title = styled.h2`
  font-weight: bold;
`;

const MenuItemBold = styled(MenuItem)`
  font-size: 12px; // 원하는 크기로 변경하세요.
  font-weight: bold;
  color: blue;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.h2`
  font-size: 32px; // 원하는 크기로 설정
`;

const SubHeader = styled.h2`
  font-size: 14px; // 원하는 폰트 크기로 설정
  color: blue; // 원하는 색상으로 설정
  font-weight: bold; // 굵기 설정
`;

const SmallText = styled.p`
  font-size: 12px; // 원하는 폰트 크기로 변경하세요.
`;

const SmallText2 = styled.p`
  font-size: 14px; // 원하는 폰트 크기로 변경하세요.
`;

const StyledSelect = styled.select`
  border: 1px solid gray; // 테두리를 추가합니다.
  padding: 0px; // 패딩을 추가하여 입력란 안쪽에 공간을 만듭니다.
  border-radius: 4px; // 테두리를 둥글게 만듭니다.
  height: 25px;
  width : 50%;
  font-size: 14px;
`;