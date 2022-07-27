import FooterStyle from './FooterStyle'
import email from '../../assets/img/email.svg'
import phone from '../../assets/img/phone.svg'
import whatsapp from '../../assets/img/whatsapp.svg'

const Footer = () => {
  return (
    <FooterStyle>
    <a className='footer__link' target='_blank'
      href='https://api.whatsapp.com/send?phone=15688888888888' rel="noreferrer">
        <img
          alt='Whatsapp consultorio dental mini'
          className='footer__img'
          src={whatsapp}
        />
    </a>
    <a className='footer__link' href='tel:499999999999'
    >
    <img
          alt='phone: 4999-9999-9999'
          className='footer__img'
          src={phone}
        />
    </a>
    <a className='footer__link' href='mailto:labhard@gmail.com'
    >
    <img
          alt='email: labhard@gmail.com'
          className='footer__img'
          src={email}
        />
    </a>
    </FooterStyle>
  )
}

export default Footer
