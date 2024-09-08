import React from 'react'
import { 
  BrowserRouter, 
  Route, Routes } from 'react-router-dom'
import Registration from './components/registration/Registration'
import Login from './components/login/Login'
import Protected from './components/Protected'
import Main from './components/main/Main'
import Cart from './components/cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Protected>
          <Main />
        </Protected>}/>
        <Route path='/cart' element={<Protected>
          <Cart />
        </Protected>}/>
        <Route path='/register' element={<Registration />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App