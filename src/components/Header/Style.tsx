import styled from 'styled-components'

const StyleHeader = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.5rem;
  #navbar-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  #navbar-logo__img{
    height: 90%;
  }
  #navbar-sign-checkout, #navbar-sign-checkout__sign{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-sign-checkout__img{
    height: 80%;
  }
  #navbar-sign-checkout__signtext{
    color: var(--cl-text)
  }
`
export default StyleHeader
