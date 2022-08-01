import { Link } from 'react-router-dom'
import StyleHeader from './StyleHeader'
import Navbar from '../Navbar/Navbar'
import getFileUrl from '../../utils/publicFile.utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Header = () => {
  const cartLength = useSelector((state: RootState) => state.cart.length)
  return (
    <StyleHeader>
      <Link id='navbar-logo' to='/'>
        <img id='navbar-logo__img' src={getFileUrl('/img/logo.svg')} alt="Logo" />
        <h1 id='navbar-logo__title'>LabHard</h1>
      </Link>
      <Navbar/>
      <div id='navbar-sign-checkout'>
        <Link id='navbar-sign-checkout__sign' to='/login'>
          <img className='navbar-sign-checkout__img' src={getFileUrl('/img/account.svg')} alt="img" />
          <p id='navbar-sign-checkout__signtext'>Ingresar</p>
        </Link>
        <Link id='navbar-sign-checkout__btn' to="/cart/checkout">
          <img className='navbar-sign-checkout__img' src={getFileUrl('/img/cart.svg')} alt="Logo" />
          <p id='navbar-sign-checkout__counter'>{cartLength}</p>
        </Link>
      </div>
      <div id='rgb-light'></div>
    </StyleHeader>
  )
}

export default Header
