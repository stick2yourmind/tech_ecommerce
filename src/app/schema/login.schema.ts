import * as Yup from 'yup'

const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('El correo electronico es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
})

export interface LoginForm{
  email: string
  password: string
}
export const initLogin:LoginForm = {
  email: '',
  password: ''
}

export default LoginSchema
