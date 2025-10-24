import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Dashboard from './pages/Dashboard'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

const App = () => {
  const { currentUser } = useAuth()

  return (
    <Routes>
      <Route 
        path="/" 
        element={currentUser ? <Dashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/login" 
        element={!currentUser ? <Login /> : <Navigate to="/" />} 
      />
      <Route 
        path="/signup" 
        element={!currentUser ? <Signup /> : <Navigate to="/" />} 
      />
    </Routes>
  )
}

export default App