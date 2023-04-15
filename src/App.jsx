import { useState } from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import TopContributers from './pages/TopContributers'
import ContactUS from './pages/ContactUS'
import Events from './pages/Events'
function App() {

  return (
    <div className="App  text-white">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/CommunityWebsite' element={<Home/>}/>
          <Route path='/CommunityWebsite/Contributers' element={<TopContributers/>}/>
          <Route path='/CommunityWebsite/Events' element={<Events/>}/>
          <Route path='/CommunityWebsite/ContactUs' element={<ContactUS/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
