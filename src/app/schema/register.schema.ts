import * as Yup from 'yup'

const fullName = /^[A-Za-z ]*$/

const registerSchema = Yup.object({
  address: Yup.string()
    .required('La dirección es requerida'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('El correo electronico es requerido'),
  name: Yup.string()
    .matches(fullName, 'Nombre invalido')
    .max(30, 'Maximo 30 caracteres')
    .required('El nombre es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
  phone: Yup.number()
    .integer('Ingrese un número de telefono válido')
    .required('El telefono es requerido')
})

export interface RegisterForm{
  address: string,
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string,
  phone: number | ''
}
export const initRegister:RegisterForm = {
  address: '',
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  phone: ''
}

export default registerSchema
