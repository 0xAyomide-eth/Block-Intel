import './App.css'
import FirstContent from './components/FirstContent'
import NavBar from './components/navbar'
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
            <NavBar />
            <FirstContent />
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
