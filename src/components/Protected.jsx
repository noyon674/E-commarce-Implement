import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Protected({ children }) {
  const isAuthenticate = useSelector(state=> state.isAuthenticated)

  return isAuthenticate ? children: <Navigate to='/login' replace/>
}

export default Protected