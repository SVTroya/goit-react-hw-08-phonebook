import React from 'react'
import { StyledLink } from '../Header/Header.styled'
import { StyledNavigation } from './Navigation.styled'
import { useAuth } from '../../hooks/useAuth'

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNavigation>
      {/*<StyledLink to="/">Home</StyledLink>*/}
      {/*{isLoggedIn && (
        <StyledLink to="/contacts">Contacts Book</StyledLink>
      )}*/}
    </StyledNavigation>
  )
}

export default Navigation
