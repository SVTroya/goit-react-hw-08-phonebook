import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }
  `
export const IconWrapper = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #008080;

  transition: color .25s ease-in-out;

  &:hover {
    color: #005454;
  }
`;
