import styled from 'styled-components'

const StyleNavbar = styled.nav`
  display: flex;
  background-color: var(--bg-dark);
  height: 100%;
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
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
  }
  .navbarlist__link--current{
    padding-bottom: 0.5rem;
    border-bottom: 0.2rem solid whitesmoke;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
  }
  .navbarlist__link:visited{
    color: var(--cl-text)
  }
  
`
export default StyleNavbar
