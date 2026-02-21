import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import PostP from './pages/PostP'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/postC' element={<PostP/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App