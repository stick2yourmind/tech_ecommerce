import { Link } from 'react-router-dom'
import StyleHeader from './StyleHeader'
import Navbar from '../Navbar/Navbar'
import getFileUrl from '../../utils/publicFile.utils'

const Header = () => {
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
        <button id='navbar-sign-checkout__btn'>
          <img className='navbar-sign-checkout__img' src={getFileUrl('/img/cart.svg')} alt="Logo" />
          <p id='navbar-sign-checkout__counter'>0</p>
        </button>
      </div>
      <div id='rgb-light'></div>
    </StyleHeader>
  )
}

export default Header
