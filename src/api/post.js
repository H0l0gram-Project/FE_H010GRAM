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

const getPosts = async () => {
    try{
        const response = await authApi.get('/api/posts');
        console.log(response.data);
        return response;
    }catch(err){
        console.log('getPosts Error : ', err)
    }
}

// const addPost = async (inputValue) => {
//     const token = Cookies.get('token');
//     const response = await authApi.post(
//       `${process.env.REACT_APP_SERVER_URL}/api/posts`,
//       inputValue,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//   };

export { getPosts, authApi };

