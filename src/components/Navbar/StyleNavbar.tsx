import styled from 'styled-components'

const StyleNavbar = styled.nav`
  display: flex;
  background-color: teal;
  .navbarlist{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  .navbarlist__item{
    list-style-type: none;
    padding: 0 0.8rem;
  }
  .navbarlist__link{
    text-decoration: none;
  }
  .navbarlist__link:visited{
    color: var(--cl-text)
  }
  
`
export default StyleNavbar
