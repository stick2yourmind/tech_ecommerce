import { Navigate, useParams } from 'react-router-dom'
import Register from '../../components/Register'
import Login from '../../components/Login'
import SignStyle from './SignStyle'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Sign = () => {
  const { params } = useParams()
  const user = useSelector((state:RootState) => state.user.data)
  return (
    <SignStyle>
      {user?.accessToken
        ? <Navigate to="/" replace={true} />
        : (
          <>
            {params === 'register' && <Register/>}
            {params === 'login' && <Login/>}
          </>
          )}

    </SignStyle>
  )
}

export default Sign
