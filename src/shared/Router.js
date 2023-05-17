import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Profile from '../pages/Profile'
import Layout from '../components/Layout/Layout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyPosts from '../pages/MyPosts'
import DetailsModal from '../pages/DetailsModal'

const Router = () => {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='details/:postId' element={<DetailsModal />}/>
        {/* route를 분리하려면 분리를 적용할 부분에 <Outlet/>을 넣어줘야 함 (여기서는 Layout의 children) */}
        <Route element={<Layout/>}>
          <Route path='/' element={<Main />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/myposts' element={<MyPosts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
