import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 6px 1px grey;
  background-color: cornsilk;
  align-items: center;
  `

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: #008080;

  transition: color 250ms ease-in-out;

  &::after{
    content: '';
    height: 3px;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: #008080;
    border-radius: 2px;

    transition:
      background-color 250ms ease-in-out,
      width 250ms ease-in-out;
  }

  &:hover::after{
    width: 100%;
    background-color: #005454;
  }

  &:hover {
    color: #005454;
  }
`
