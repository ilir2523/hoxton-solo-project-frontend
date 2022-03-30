import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn'

function App() {


  return (
    <Routes>
      <Route index element={<Navigate to='/logIn' />} />
      <Route path='/logIn' element={<LogIn />} />
    </Routes>
  )
}

export default App
