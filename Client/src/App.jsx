import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import React from 'react'
import About from './pages/About'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element = {<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Projects" element = {<Projects />} />
        <Route path="/Dashboard" element = {<Dashboard />} />
        <Route path="/sign-in" element = {<Signin />} />
        <Route path="/Sign-up" element = {<Signup />} />






      </Routes>
    </BrowserRouter>
  )
}
