import styled from 'styled-components';

export const ContactWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    margin-left: auto;
  }

`

export const Name = styled.span`
  color: #004242;
  font-weight: 400;
  font-family: 'Dancing Script', cursive;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Phone = styled.span`
  color: #004242;
  font-style: italic;
  font-size: 24px;
  padding-top: 3px;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: color .25s ease-in-out;

  @media only screen and (min-width: 768px) {
    margin-left: 10px;
  }

  &:hover {
    color: red;
  }
`;
