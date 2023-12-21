import styled from 'styled-components'

export const ListContainer = styled.section`
  width: 100%;
  /*height: 800px;*/
  background-color: #008080;
  border-radius: 20px;
  box-shadow: 2px 2px 6px 2px gray;
  display: flex;

  @media only screen and (min-width: 1158px) {
    width: 50%;
  }

  h3 {
    display: inline;
    font-weight: 500;
  }

  ul {
    margin-top: 5px;
    margin-left: 4px;
    width: 100%;
    padding: 30px 5px 0 0;
    line-height: 1.24;
  }

  @media only screen and (min-width: 768px) {
    ul {
      margin-top: 7px;
      line-height: 1.16;
    }
  }
`
export const BackgroundContainer = styled.div`
  background-color: cornsilk;
  display: flex;
  margin: 40px 30px 30px;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0;
  box-shadow: inset 1px 1px 6px 3px #a8a190;

  @media only screen and (min-width: 1158px) {
    margin: 30px 30px 30px 50px;
  }
`

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-image: repeating-linear-gradient(0deg, #999999, #999999 3px, transparent 3px, transparent);
  background-size: 50px 35px;
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    padding: 0 10px 0 60px;

    &::before{
      position: absolute;
      content: '';
      width: 3px;
      height: calc(100% + 20px);
      top: -10px;
      background-color: #999999;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: -6px;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-left: 4px;
    margin-top: -7px;
    gap: 20px;
  }
`
