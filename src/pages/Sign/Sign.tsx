import { useParams } from 'react-router-dom'
import Register from '../../components/Register'
import Login from '../../components/Login'
import SignStyle from './SignStyle'

const Sign = () => {
  const { params } = useParams()
  return (
    <SignStyle>
      {params === 'register' && <Register/>}
      {params === 'login' && <Login/>}
    </SignStyle>
  )
}

export default Sign
