import { Link } from 'react-router-dom'
import StyleHeader from './StyleHeader'
import Navbar from '../Navbar/Navbar'
import getFileUrl from '../../utils/publicFile.utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { cleanUser } from '../../app/features/userSlice'

const Header = () => {
  const cartLength = useSelector((state: RootState) => state.cart.length)
  const name = useSelector((state: RootState) => state.user.data?.name)
  const dispatch = useDispatch()
  return (
    <StyleHeader>
      <Link id='navbar-logo' to='/'>
        <img id='navbar-logo__img' src={getFileUrl('/img/logo.svg')} alt="Logo" />
        <h1 id='navbar-logo__title'>LabHard</h1>
      </Link>
      <Navbar/>
      <div id='navbar-sign-checkout'>
        {!name
          ? (
            <Link id='navbar-sign-checkout__sign' to='/sign/login'>
            <img className='navbar-sign-checkout__img' src={getFileUrl('/img/account.svg')} alt="img" />
             <p id='navbar-sign-checkout__signtext'>Ingresar</p>
            </Link>
            )
          : (<>
            <Link id='navbar-sign-checkout__sign' to='/profile'>
             <img className='navbar-sign-checkout__img' src={getFileUrl('/img/account.svg')} alt="img" />
             <p id='navbar-sign-checkout__signtext'>Hola</p>
             <p id='navbar-sign-checkout__signtext'>{`, ${name}`}</p>
            </Link>
            <Link id='navbar-sign-checkout__sign' to="/"
              onClick={() => dispatch(cleanUser())}
            >
             <p id='navbar-sign-checkout__signtext'>Salir</p>
            </Link>
            </>
            )
        }
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
