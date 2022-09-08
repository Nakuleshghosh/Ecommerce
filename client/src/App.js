import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />  
			<Route path="/dashboard" element={<Dashboard />} />  
    </Routes>
    </div>
  )
}

export default App