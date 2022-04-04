import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import HomeSections from './components/HomeSections'
import Profile from './components/Profile'
import { useStore } from "./Store"



function App() {
  return (
    <Routes>
      <Route index element={<Navigate to='/logIn' />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/home' element={<Home />}>
        <Route path='/home' element={<HomeSections />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
