import './App.css'
import FirstContent from './components/FirstContent'
import NavBar from './components/navbar'
import SignUp from './components/SignupPage'
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

        <Route path='/signup' element={<SignUp />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
