import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123')
      setUser('Admin')

    else if (email == 'user@me.com' && password == '123')
      setUser('Employee')
    else
      console.log('Invalid Credentials')
  }

  const data = useContext(AuthContext)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'Admin' ? <AdminDashboard/> : <EmployeeDashboard/> }
    </>
  )
}

export default App