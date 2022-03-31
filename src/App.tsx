import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home';

function App() {


  return (
    <Routes>
      <Route index element={<Navigate to='/home' />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
