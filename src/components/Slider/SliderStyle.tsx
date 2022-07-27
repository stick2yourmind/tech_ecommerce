import styled from 'styled-components'

const SliderStyle = styled.div`
  display: grid;
  grid-template-columns: 4rem 80rem 4rem;
  column-gap: 2rem;
  grid-template-rows: 6rem 45rem;
  justify-items: center;
  align-items: center;
  border: 0.2rem solid black;
  border-radius: 2rem;
  grid-auto-flow: row;

  #slider-title{
    grid-column: 1/4;
    padding-left: 4rem;
    grid-row: 1/2;
    align-self: center;
    font-size: 2rem;
    justify-self: start;
    font-family: 'Work Sans',sans-serif;
    padding-top: 4rem;
    font-size: 4rem;
  }
  #slider-step-backward{
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
  }
  #slider-step-forward{
    grid-column: 3/4;
    grid-row: 2/3;
    width: 100%;
    transform: rotate(180deg);
  }
  #slider-step-backward:hover, #slider-step-forward:hover {
    filter: invert(56%) sepia(95%) saturate(378%) hue-rotate(120deg) brightness(93%) contrast(91%);
  }
`
export default SliderStyle
