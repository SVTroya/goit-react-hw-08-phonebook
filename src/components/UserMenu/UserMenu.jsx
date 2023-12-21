import React from 'react'
import { StyledMenu } from './UserMenu.styled'
import { useDispatch, useSelector } from 'react-redux'
import {  selectUser } from '../../redux/auth/selectors'
import { logOutThunk } from '../../redux/auth/operations'
import { useNavigate } from 'react-router-dom'

function UserMenu() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handleLogOut() {
    dispatch(logOutThunk())
    navigate('/')
  }

  return (
    <StyledMenu>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </StyledMenu>
  )
}

export default UserMenu
