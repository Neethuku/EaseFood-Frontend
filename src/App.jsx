import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import CategoryPage from './Pages/CategoryPage'
import Landingpage from './Pages/Landingpage'
import TableTrackPage from './Pages/TableTrackPage'

function App() {
  return (
  <>
<Header/>
<Routes>
  <Route path='/' element={<Landingpage/>}/> 
  <Route path='table-track-page' element={<TableTrackPage/>}/>
  <Route path='home-page' element={<HomePage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/cart' element={<CartPage/>}/>
  <Route path='/categories/:id' element={<CategoryPage/>}/>
  <Route path='/categories' element={<CategoryPage/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App