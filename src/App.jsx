import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import SignupUserPage from './Pages/SignupUserPage'
import SignupProprietorPage from './Pages/SignupProprietorPage'

function App() {
  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/aboutPage' element={<AboutPage/>}/>
  <Route path='/sign-up' element={<SignUpPage/>}/>
  <Route path='/signup-user' element={<SignupUserPage/>}/>
  <Route path='/proprietor-signup' element={<SignupProprietorPage/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App