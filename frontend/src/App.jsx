import './App.css'
import Navbar from './components/NavBar'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignupPage'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//react routing 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' //this is for the home route
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          } />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
