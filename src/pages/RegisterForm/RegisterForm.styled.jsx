import styled from 'styled-components'

export const StyledForm = styled.form`
  margin: 40px auto;
  width: 100%;
  max-width: 320px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
  background-color: cornsilk;
  font-size: 20px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: inset 1px 1px 6px 3px #a8a190;
  color: #004242;
  border: 1px solid grey;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }

  button {
    margin: 0 auto;
    width: fit-content;
    border-radius: 20px;
    border: none;
    background-color: #008080;
    text-transform: uppercase;
    padding: 8px 16px;
    font-weight: 600;
    color: white;
    box-shadow: 0 0 3px 1px #a8a190;
    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover, &:focus {
      background-color: #005454;
    }
  }
`

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 23px;
  position: relative;
  line-height: 1;
  padding-bottom: 20px;

  input {
    margin-top: 2px;
    height: 30px;
    border-radius: 8px;
    border: none;
    padding: 2px 10px;
    box-shadow: 0 0 3px 1px #a8a190;
    font-size: 20px;

    &:hover, &:focus {
      outline: none;
    }
  }
`

export const ErrorMessage = styled.span`
  margin-top: 3px;
  font-size: 14px;
  color: red;
  font-style: italic;
  font-weight: 500;
  line-height: 0.7;
  position: absolute;
  bottom: 4px;
  left: 0;
`
