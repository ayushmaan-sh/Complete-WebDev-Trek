import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nabvar from './Nabvar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>   //Main Home Page
          <Route path='/about' element={<About/>}></Route>  //Routing on About page
          <Route path='/contact' element={<Contact/>}></Route>  //Routing on Contact page
          <Route path='*' element={<div>Page Not Found</div>}></Route> //if an undefined page routed
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
