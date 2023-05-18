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

// 전체 포스트 조회
const getPosts = async () => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts`);
        console.log(response.data);
        return response;
    }catch(err){
        console.log('getPosts Error : ', err)
    }
}

// 포스트 추가
const addPost = async(formData) => {
    try{
        const response = await authApi.post('/api/posts', formData);
        console.log(response.data);
        return response;
    }catch(err){
        console.log('addPost Error : ', err)
    }
}

// 내 포스트 조회
const getMyPosts = async () => {
    try{
        const response = await authApi.get('/api/posts/mypage');
        console.log(response.data);
        return response;
    }catch(err){
        console.log('getPosts Error : ', err)
    }
}

export { getPosts, addPost, getMyPosts, authApi };

