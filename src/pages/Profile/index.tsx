import { useSelector } from 'react-redux'
import ProfileStyle from './ProfileStyle'
import { RootState } from '../../app/store'
import { Navigate } from 'react-router-dom'
const Profile = () => {
  const user = useSelector((state:RootState) => state.user.data)
  return (
    <ProfileStyle>
      {!user
        ? <Navigate to="/sign/login" replace={true} />
        : (
          <>
          <h3 className='profile__title'>Datos del perfil</h3>
          <ul className='profile__info'>
            <li className='profile__detail'>Nombre: {user?.name}</li>
            <li className='profile__detail'>Direccion: {user?.address}</li>
            <li className='profile__detail'>Telefono: {user?.phone}</li>
            <li className='profile__detail'>Email: {user?.email}</li>
          </ul>
          </>
          )
      }

    </ProfileStyle>
  )
}

export default Profile
