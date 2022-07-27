import styled from 'styled-components'

const CardStyle = styled.div`
  min-width: 25rem;
  justify-content: center;
  background-color: #fff;
  display: grid;
  grid-template-areas: "card__img"
                       "card__title"
                       "card_price"
                       "card__btn";
  grid-template-columns: 20rem;
  grid-template-rows: 20rem 6rem 4rem 5rem;
  gap: 0;
  justify-items: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  padding-bottom: 1rem;
  .card__img{
    grid-area: card__img;
    width: 100%;
  }
  .card__title{
    grid-area: card__title;
    width: 100%;
    font-size: 1.6rem;
    font-family: 'Work Sans',sans-serif;
    text-align: center;
  }
  .card_price{
    grid-area: card_price;
    font-size: 2.8rem;
    font-family: 'Work Sans',sans-serif;
  }
  .card__btn{
    grid-area: card__btn;
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
  }
`
export default CardStyle
