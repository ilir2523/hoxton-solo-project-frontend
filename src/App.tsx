import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home';
import HomeSections from './components/HomeSections'
import Profile from './components/Profile'
import TransferMoney from './components/TransferMoney'
import RecentActivity from './components/RecentActivity'



function App() {
  return (
    <Routes>
      <Route index element={<Navigate to='/logIn' />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/home' element={<Home />}>
        <Route path='/home' element={<HomeSections />} />
        <Route path='profile' element={<Profile />} />
        <Route path='transferMoney' element={<TransferMoney />} />
        <Route path='transactions-page' element={<RecentActivity />} />
      </Route>
    </Routes>
  )
}

export default App
