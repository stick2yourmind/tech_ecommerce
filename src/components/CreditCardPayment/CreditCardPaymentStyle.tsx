import styled from 'styled-components'

const CreditCardPaymentStyle = styled.div`
  .card{
    width: 500px;
    height: 300px;
    color: #fff;
    cursor: pointer;
    perspective: 100rem;
  }
  .card__inner{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 1rem;
    /* overflow: hidden; */
    border-width: 0;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .card__front,.card__back{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #0045c7, #ff2c7d);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2rem 0.3rem;
    border-radius: 1.15rem;
    overflow: hidden;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .card__row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .card__chip{
    width: 6rem;
    padding-top: 2rem;
    padding-bottom: 10rem;
  }
  .card__front-background, .card__back-background{
    opacity: 0.4;
    z-index: -1;
    position: absolute;
    width: 100%;
  }
  .card__number{
    font-size: 3rem;
  }
  .card__valid-date{
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
  }
  .card__valid-text {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .card__owner-name {
    font-size: 1.3rem;
    font-weight: 800;
  }
  .card__magnetic-bar {
    background-color: #222;
    min-height: 6rem;
    padding-top: 6rem;
    margin-top: 2.5rem;
    min-width: 120%;
    position: relative;
    left: -1rem;
  }
  .card__security{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }
  .card__pattern-signature {
    width: 37rem;
  }
  .card__cvv {
    color: #222;
    font-style: italic;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: whitesmoke;
  }
  .card__back{
    transform: rotateY(180deg);
  }
  /* .card:hover .card__inner{
    transform: rotateY(180deg);
  } */
`

export default CreditCardPaymentStyle
