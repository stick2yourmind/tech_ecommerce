import * as Yup from 'yup'

const street = /^[A-Za-z 0-9]*$/
const textOnly = /^[A-Za-z ]*$/

const ShippingSchema = Yup.object({
  address: Yup.string()
    .matches(street, 'Nombre invalido')
    .max(50, 'Maximo 30 caracteres')
    .required('El nombre es requerido'),
  locality: Yup.string()
    .matches(textOnly, 'Nombre invalido')
    .max(50, 'Maximo 30 caracteres')
    .required('La contraseña es requerida'),
  postalCode: Yup.number()
    .integer('Ingrese un número de telefono válido')
    .required('El telefono es requerido'),
  province: Yup.string()
    .matches(textOnly, 'Nombre invalido')
    .max(50, 'Maximo 30 caracteres')
    .required('La contraseña es requerida')
})

export interface ShippingForm{
  address: string
  locality: string
  postalCode: number | '',
  province: string
}
export const initShipping:ShippingForm = {
  address: '',
  locality: '',
  postalCode: '',
  province: ''
}

export default ShippingSchema
