import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/store'
import Dashboard from './pages/Dashboard'
import { AuthProvider } from './context/authContext'
import Login from './pages/Login'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  )
   
}

export default App
