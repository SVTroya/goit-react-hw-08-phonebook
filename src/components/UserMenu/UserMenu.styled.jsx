import styled from 'styled-components'

export const StyledMenu = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  p {
    border-radius: 16px;
    color: #69655b;
    font-weight: 500;
  }

  button {
    width: fit-content;
    border-radius: 16px;
    border: none;
    background-color: #008080;
    text-transform: uppercase;
    padding: 6px 12px;
    font-weight: 600;
    color: white;
    box-shadow: 1px 1px 2px 1px #d9d0ba;
    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover, &:focus {
      background-color: #005454;
    }
`
