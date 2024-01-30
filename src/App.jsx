import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import CompanyRegistration from './components/Article/CompanyRegistration/CompanyRegistration'
import PostJob from './components/Article/PostJob/PostJob'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/company-registration' element={<CompanyRegistration />} />
        <Route path='/post-job' element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
