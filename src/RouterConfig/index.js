import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import HomeContainer from '../Container/Home'
import LoginContainer from '../Container/Login'
import UserContainer from '../Container/User'
import HeaderComponent from '../Components/Header'
import FooterComponent from '../Components/Footer'

const RouterConfigComponent = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/user' element={<UserContainer />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>    
    </>
  )
}

export default RouterConfigComponent