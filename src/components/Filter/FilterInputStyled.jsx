import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  display: inline;
  max-width: 250px;
  width: 100%;
  border: none;
  padding: 6px 10px;
  box-shadow: inset 1px 1px 3px 1px gray;
  font-size: 18px;
  border-radius: 2px;
  margin-right: 5px;

  &:hover, &:focus {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    padding: 6px 10px;
  }
`;
