import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { authApi } from "../api/post";


const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const navigate = useNavigate();

    // ^----- 만약 토큰을 들고 있다면 메인페이지로 라우팅 ----- //
    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    // ^---------- POST 요청으로 로그인을 하는 부분 ---------- // 
    
    const loginUser = async (user) => {
        try {
            // 서버에 POST요청으로 가입 된 유저가 있는지 확인하는 부분
            const response = await authApi.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, user);

            // ^----- 받아온 데이터를 기준으로 Token값을 가공해 브라우저에 저장하는 부분 ----- //
            // 토큰을 양식에 맞게 가공
            const { authorization: tokenOrigin } = response.headers;
            const token = tokenOrigin.replace("Bearer ", "");
            const userToken = jwtDecode(token);
            const expirationTime = new Date(userToken.exp * 1000);

            // 위에서 설정한 설정값과 토큰값을 쿠키에 저장
            Cookies.set("token", token, { expires: expirationTime });
            alert(`로그인 성공`);
            navigate("/");
        } catch (err) {
            alert(`이메일 및 비밀번호를 잘못 입력하셨습니다.`);
            // console.log("✨ ‣ loginUser ‣ err:", err);
        }
    };

    // ---------- Input Handler ---------- //
    const emailInputHandler = (e) => {
        setEmailInput(e.target.value);
        setUser({ ...user, email: e.target.value });
    };

    const passwordInputHandler = (e) => {
        setPasswordInput(e.target.value);
        setUser({ ...user, password: e.target.value });
    };

    // ---------- Submit Handler ----------
    const submitHandler = async (e) => {
        e.preventDefault();
        if (emailInput.trim() === "" || passwordInput.trim() === "") {
            alert("이메일 또는 비밀번호를 입력해주세요.");
            return;
        }
        loginUser(user);
    };

    return (
        <LoginContainer>
            <InnerBox>
                <TitleBox>
                    <img src={process.env.PUBLIC_URL + "/H0l0GRAM_logo.png"} alt="홀로그램 로고" />
                </TitleBox>
                <form onSubmit={submitHandler}>
                    <div className="emailBox">
                        <MailInput
                            type="email"
                            className="mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="yourmail@mail.com"
                            onChange={emailInputHandler}
                        />
                    </div>
                    <div className="passwordBox">
                        <PasswordInput
                            type="password"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="비밀번호"
                            onChange={passwordInputHandler}
                        />
                    </div>
                    <LoginBox>
                        <LoginBtn>로그인</LoginBtn>
                    </LoginBox>
                </form>
                <LoginLine>
                    <LineL />
                    <OrBox>또는</OrBox>
                    <LineR />
                </LoginLine>
                <SignUpBox>
                    <p>계정이 없으신가요?</p>
                    <SignUpBtn>가입하기</SignUpBtn>
                </SignUpBox>
            </InnerBox>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const InnerBox = styled.div`
    width: 350px;
    height: 550px;
    padding: 40px;
    background-color: #fff;
    border: 1px #d2d2d2 solid;
    box-shadow: 0 0 20px rgba(94, 94, 94, 0.1);
    border-radius: 5px;
`;
const TitleBox = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin: 50px 20px;
`;
const MailInput = styled.input`
    margin-bottom: 1rem;
`;
const PasswordInput = styled.input`
    margin-bottom: 1rem;
`;
const LoginBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    background-color: #4cb5f9;
    color: #fff;
`;
const LoginBtn = styled.button`
    width: 100%;
`;
const LoginLine = styled.div`
    display: flex;
    margin-top: 42px;
    font-size: 15px;
`;
const LineR = styled.span`
    height: 1px;
    width: 85px;
    background-color: rgb(147, 147, 147);
    margin-top: 12px;
`;
const LineL = styled(LineR)`
    margin-right: 32px;
`;
const OrBox = styled.div`
    margin-right: 34px;
`;
const SignUpBox = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    margin-top: 42px;
`;
const SignUpBtn = styled.button`
    color: #0095f7;
    font-weight: 600;
`;
