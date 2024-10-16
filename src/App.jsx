import React, {createContext, useContext, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavComponent from './components/NavComponent'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [state, setState] = useState({})
  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  )
}

const App = () => (
  <AppProvider>
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </AppProvider>
)

export default App
export {AppContext, useContext}
