import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home.jsx'
import { Profile } from './Pages/profile.jsx'
import { Learn } from './Pages/learn.jsx'
import { Summary } from './Pages/summary.jsx'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])
  
  useEffect(()=>{
    fetch("/members").then(
      res=>res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return(
    <div className = "app-container">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
