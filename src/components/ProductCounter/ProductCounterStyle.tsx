import styled from 'styled-components'

const ProductCounterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  .counter__selector{
    padding:4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counter__input{
    padding: 0 1rem;
  }
  .counter__img{
    width: 2rem;
  }
  .counter__btn{
    font-size: 2.8rem;
    font-family: 'Work Sans',sans-serif;
    background-color: var(--bg-dark);
    color: var(--cl-text);
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default ProductCounterStyle
