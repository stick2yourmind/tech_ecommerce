import StyleHeader from './Style'
import Navbar from '../Navbar'
import getFileUrl from '../../utils/publicFile.utils'
const Header = () => {
  return (
    <StyleHeader>
      <div id='navbar-logo'>
        <img id='navbar-logo__img' src={getFileUrl('/img/logo.svg')} alt="Logo" />
        <h1 id='navbar-logo__title'>LabHard</h1>
      </div>
      <Navbar/>
      <div id='navbar-sign-checkout'>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a id='navbar-sign-checkout__sign' href="http://" target="_blank" rel="noopener noreferrer">
          <img className='navbar-sign-checkout__img' src={getFileUrl('/img/account.svg')} alt="img" />
          <p id='navbar-sign-checkout__signtext'>Ingresar</p>
        </a>
        <img className='navbar-sign-checkout__img' src={getFileUrl('/img/cart.svg')} alt="Logo" />
      </div>
    </StyleHeader>
  )
}

export default Header
