import styled from 'styled-components';

export const AdaptiveContainer = styled.div`
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 20px 20px;

  display: flex;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 32px;
  }

  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;
