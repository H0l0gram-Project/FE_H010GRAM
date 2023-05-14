import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Profile from '../pages/Profile'
import Post from '../pages/Post'
import Details from '../pages/Details'
import Layout from '../components/Layout/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Main /></Layout>}/>
        <Route path='/profile' element={<Layout><Profile /></Layout>}/>
        <Route path='/post' element={<Layout><Post /></Layout>}/>
        <Route path='/details/1' element={<Layout><Details /></Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
