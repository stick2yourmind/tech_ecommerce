import CardStyle from './CardStyle'

const Card = ({ description }) => {
  return (
    <CardStyle>
      <img className='card__img' src="https://www.tiendanova.com.ar/SITES/IMG/clan-co-10-2020/19-11-2020-12-11-09-9.jpg" alt="3080" />
      <h5 className='card__title'>RTX 3080 10 GB GAMING OC GDDR6X Gigabyte</h5>
      <h5 className='card_price'>$200.000</h5>
      <button className='card__btn'>Ver producto</button>
    </CardStyle>
  )
}

export default Card
