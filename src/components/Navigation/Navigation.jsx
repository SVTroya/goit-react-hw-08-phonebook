import React from 'react'
import { StyledLink } from '../Header/Header.styled'
import { IconWrapper, StyledNavigation } from './Navigation.styled'
import { useMediaQuery } from 'react-responsive'
import { IoIosHome } from 'react-icons/io'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { useAuth } from '../../hooks'

function Navigation() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' })

  const { isLoggedIn } = useAuth();
  return (
    <StyledNavigation>
      {isTabletOrDesktop
        ? <StyledLink to="/">Home</StyledLink>
      : <IconWrapper to={"/"}>
          <IoIosHome size={25}/>
        </IconWrapper>
      }
      {isLoggedIn
        && (isTabletOrDesktop
        ? <StyledLink to="/contacts">Contacts Book</StyledLink>
          : <IconWrapper to={"/contacts"}>
          <RiContactsBook2Fill size={25} />
        </IconWrapper>)
      }
    </StyledNavigation>
  )
}

export default Navigation
