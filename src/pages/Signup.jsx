import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Signup = () => {
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [nicknameInput, setNicknameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordCheckInput, setPasswordCheckInput] = useState("");

    // ^----- 정규식 ----- //
    // 이메일의 유형성을 검사하는 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 비밀번호 유효성을 검사하는 정규식 (영문, 숫자, 특수문자 포함, 4자 이상 15자 이하)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{4,15}$/;

    // 닉네임 유효성을 검사하는 정규식 (알파벳 또는 한글, 2글자 이상 10글자 이하)
    const nicknameRegex = /^[a-zA-Z가-힣]{2,10}$/;

    const signUpUser = async (user) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/register`, user);
            alert("가입이 완료되었습니다. 가입하신 이메일과 비밀번호로 로그인하여 주세요.");
            navigate("/login");
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // ^----- 정규식 검사 ----- //
        if (passwordInput !== passwordCheckInput) {
            setPasswordInput("");
            setPasswordCheckInput("");
            return alert(`비밀번호 확인이 일치하지 않습니다.`);
        }

        if (!emailRegex.test(emailInput)) {
            return alert(`유효한 이메일을 넣어주세요.`);
        }

        if (!passwordRegex.test(passwordInput)) {
            return alert(`비밀번호는 영문, 숫자, 특수문자를 포함하여 4자 이상 15자 이하로 입력해주세요.`);
        }

        if (!nicknameRegex.test(nicknameInput)) {
            return alert(`닉네임은 알파벳 또는 한글로 이루어진 2글자 이상 10글자 이하로 입력해주세요.`);
        }

        // ----- 유저가 입력한 정보를 user에 담기 ----- //
        const user = {
            email: emailInput,
            password: passwordInput,
            nickname: nicknameInput,
            checkPassword: passwordCheckInput,
        };

        signUpUser(user);
    };

    return (
        <SignUpContainer>
            <InnerBox>
                <TitleBox>
                    <img src={process.env.PUBLIC_URL + "/H0l0GRAM_logo.png"} alt="홀로그램 로고" />
                </TitleBox>
                <form onSubmit={onSubmitHandler}>
                    <div className="emailBox">
                        <MailInput
                            type="email"
                            className="mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="yourmail@email.com"
                            onChange={(e) => {
                                setEmailInput(e.target.value);
                            }}
                        />
                    </div>
                    <Nickname>
                        <input
                            type="text"
                            className={`mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
                            placeholder="닉네임(알파벳 또는 한글로 이루어진 2~10글자 이하)"
                            onChange={(e) => {
                                setNicknameInput(e.target.value);
                            }}
                        />
                    </Nickname>
                    <div className="passwordBox">
                        <PasswordInput
                            type="password"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="비밀번호(영문, 숫자, 특수문자를 포함하여 4자~15자 이하)"
                            onChange={(e) => {
                                setPasswordInput(e.target.value);
                            }}
                        />
                    </div>
                    <RePasswordBox>
                        <input
                            type="password"
                            className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1`}
                            placeholder="비밀번호 확인"
                            onChange={(e) => {
                                setPasswordCheckInput(e.target.value);
                            }}
                        />
                    </RePasswordBox>
                    <SignUpBox>
                        <SignUpBtn>가입</SignUpBtn>
                    </SignUpBox>
                </form>
                <LoginLine>
                    <LineL />
                    <OrBox>또는</OrBox>
                    <LineR />
                </LoginLine>
                <LoginBox>
                    <div>계정이 있으신가요?</div>
                    <LoginBtn>
                        <Link to="/login">로그인하기</Link>
                    </LoginBtn>
                </LoginBox>
            </InnerBox>
        </SignUpContainer>
    );
};

export default Signup;

const SignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 15px;
`;
const InnerBox = styled.div`
    width: 350px;
    height: 550px;
    padding: 40px;
    background-color: #fff;
    border: 1px solid #d2d2d2;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;
const TitleBox = styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin: 20px 20px;
`;
const MailInput = styled.input`
    font-size: 14px;
    margin-bottom: 0.7rem;
`;
const Nickname = styled.div`
    margin-bottom: 0.7rem;
`;
const PasswordInput = styled.input`
    margin-bottom: 0.7rem;
`;
const RePasswordBox = styled.div`
    margin-bottom: 1.2rem;
`;
const SignUpBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 36px;
    font-size: 13px;
    font-weight: 600;
    background-color: #4cb5f9;
    color: #fff;
`;
const SignUpBtn = styled.button`
    width: 100%;
`;
const LoginLine = styled.div`
    display: flex;
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 15px;
`;
const LineR = styled.span`
    height: 1.5px;
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
const LoginBox = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: space-around;
`;
const LoginBtn = styled.button`
    color: #0095f7;
    font-weight: 600;
`;
