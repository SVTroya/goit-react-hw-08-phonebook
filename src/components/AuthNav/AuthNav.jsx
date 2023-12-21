import React from 'react'
import { StyledLink } from '../Header/Header.styled'
import { StyledAuthNav } from './AuthNav.styled'

function AuthNav() {
  return (
    <StyledAuthNav>
      <StyledLink to='login'>Login</StyledLink>
      <StyledLink to='register'>Register</StyledLink>
    </StyledAuthNav>
  )
}

export default AuthNav
