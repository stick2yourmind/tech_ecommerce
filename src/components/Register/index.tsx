import { useEffect } from 'react'
import RegisterStyle from './RegisterStyle'
import { Formik, Form as FormikForm } from 'formik'
import registerSchema, { initRegister, RegisterForm } from '../../app/schema/register.schema'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import TextField from '../TextField'
import { Link, useNavigate } from 'react-router-dom'

export interface RESDataRegUser{
  _id: string
  address: string
  email: string
  name: string
  phone: number
  registered: boolean
}

export interface REQDataRegUser{
  address: string
  email: string
  name: string
  password: string
  phone: number
}
const Register = () => {
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataRegUser, REQDataRegUser>()
  const navigate = useNavigate()

  // it only is triggered after succesful validation
  const onSubmitRegister = (regValues:RegisterForm) => {
    const data: REQDataRegUser = {
      address: regValues.address,
      email: regValues.email,
      name: regValues.name,
      password: regValues.password,
      phone: (regValues.phone) as number
    }

    axiosFn({
      axiosInstance,
      method: 'post',
      requestConfig: { data },
      url: import.meta.env.VITE_POST_REGISTER_EP
    })
  }
  useEffect(() => {
    if (res.statusCode === 200)
      navigate('/login', { replace: true })
  }
  , [res])
  return (
    <RegisterStyle>
      <h3 className='form__title'>Crea tu cuenta</h3>
      <Formik
        initialValues={initRegister}
        validationSchema={registerSchema}
        onSubmit={onSubmitRegister}
      >
        <FormikForm className='form__body'>
          <TextField label='Nombre' name='name' type='text' placeholder="Nombre" focus/>
          <TextField label='Telefono' name='phone' type='tel' placeholder="Telefono"/>
          <TextField label='Email' name='email' type='email' placeholder="Email"/>
          <TextField label='Address' name='address' type='text' placeholder="Address"/>
          <TextField label='Password' name='password' type='password' placeholder="Password"/>
          <TextField label='passwordConfirmation' name='passwordConfirmation' type='password'
          placeholder="Password"/>
          <button className='form__submit-btn' type='submit'>Registrarse</button>
          {!loading && err &&
            <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
        </FormikForm>
      </Formik>
      <Link className='form__sign-other' to='/sign/login'>
        Ingresar
      </Link>
    </RegisterStyle>
  )
}

export default Register
