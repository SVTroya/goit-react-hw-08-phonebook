import React from 'react'
import { StyledMenu } from './UserMenu.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logOutThunk } from '../../redux/auth/operations'

function UserMenu() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <StyledMenu>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOutThunk())}>Logout</button>
    </StyledMenu>
  )
}

export default UserMenu
