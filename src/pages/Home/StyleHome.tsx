import styled from 'styled-components'

const StyleHome = styled.div`
  .home-head-img{
    width: 100vw;
  }
  .home-slider-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
 .card-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
 }
 .card-container > :nth-child(n+4){
    display: none;
 }
`

export default StyleHome
