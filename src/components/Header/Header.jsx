import React from 'react'
import { HeaderWrapper, StyledHeader } from './Header.styled'
import UserMenu from '../UserMenu/UserMenu'
import Container from '../Container/Container'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import { useAuth } from '../../hooks'

function Header() {
  const { isLoggedIn } = useAuth()
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header
