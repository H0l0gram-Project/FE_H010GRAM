// API 요청이 들어가는 모듈
import axios from "axios";
import Cookies from "js-cookie";

// 토큰 가져오기
const token = Cookies.get("token");

// Axios instance
const authApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        Authorization: `Bearer ${token}`
    },
});

// 내 프로필 조회
const getMyProfile = async (memberId) => {
    try{
        const response = await authApi.get(`/api/members/${memberId}`);
        console.log(response.data);
        return response;
    }catch(err){
        console.log('getMyProfile Error : ', err)
    }
}

export { getMyProfile, authApi };
