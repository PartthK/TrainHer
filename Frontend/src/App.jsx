import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { Profile } from './Pages/Profile.jsx'
import { Learn } from './Pages/Learn.jsx'
import { Summary } from './Pages/Summary.jsx'

function App() {

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
