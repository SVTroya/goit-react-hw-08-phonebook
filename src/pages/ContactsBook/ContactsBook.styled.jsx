import binder_ring from '../../images/binder_ring.webp'
import binder_ring_v from '../../images/binder_ring_v.webp'

import styled from 'styled-components';

export const ContactsBookContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 30px;
  color: #010101;
  flex-grow: 1;
  flex-direction: column;

  @media only screen and (min-width: 1158px) {
    flex-direction: row;
  }
`;

export const BinderRings = styled.div`
  width: calc(100% - 100px);
  height: 100px;
  margin: -40px 60px;
  background-image: url("${binder_ring_v}");
  background-position: left;
  background-repeat: round no-repeat;
  z-index: 10;
  background-size: 40px 90px;

  @media only screen and (min-width: 1158px) {
    width: 100px;
    height: calc(100% - 100px);
    margin: 60px -40px;
    background-image: url("${binder_ring}");
    background-position: top;
    background-repeat: no-repeat round;
    z-index: 10;
    background-size: 90px 40px;
  }
`
