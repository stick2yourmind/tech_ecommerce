import styled from 'styled-components'

const FooterStyle = styled.footer`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  background-color: var(--bg-dark);
  .footer__link{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer__img{
    height: 70%;
    filter: invert(99%) sepia(2%) saturate(641%) hue-rotate(171deg) brightness(123%) contrast(100%);
    padding: 0 2rem;
  }
`
export default FooterStyle
