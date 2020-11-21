import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../redux/actions/auth'

function Logout() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(logout())
  }, [])

  return (
    <Redirect to={'/'} />
  )
}

export default Logout
