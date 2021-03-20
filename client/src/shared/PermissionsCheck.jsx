import React from 'react'
import { useSelector } from 'react-redux'

import { isAuthenticated } from '../store/auth/selectors'

const PermissionsCheck = ({ children }) => {

  return (
    <>
      {children}
    </>
  )
}

export default PermissionsCheck
