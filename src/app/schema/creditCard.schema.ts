import * as Yup from 'yup'

// const onlyNumbers = /^[0-9]+$/
const onlyText = /^[A-Za-z ]*$/
const onlyThreeNumbers = /^[0-9]{3}$/
const only16Numbers = /^[0-9]{16}$/
const CreditCardSchema = Yup.object({
  cvv: Yup.string()
    .matches(onlyThreeNumbers, 'El numero CVV debe poseer 3 digitos')
    .required('Numero CVV requerido'),
  fromMonth: Yup.number()
    .typeError('El mes inicial debe ser un numero')
    .min(1, 'Mes inicial ingresado no valido, minimo 1, maximo 12')
    .max(12, 'Mes inicial ingresado no valido, minimo 1, maximo 12')
    .required('Mes inicial requerido'),
  fromYear: Yup.number()
    .typeError('El año inicial debe ser un numero')
    .min(2015, 'Año inicial no valido, minimo 2015, maximo 2022')
    .max(2022, 'Año inicial no valido, minimo 2015, maximo 2022')
    .required('Año inicial requerido'),
  number: Yup.string()
    .matches(only16Numbers, 'El numero debe poseer 16 digitos')
    .required('El numero es requerido'),
  owner: Yup.string()
    .matches(onlyText, 'Nombre invalido')
    .required('Nombre requerido'),
  thruMonth: Yup.number()
    .typeError('El mes final debe ser un numero')
    .min(1, 'Mes final no valido, minimo 1, maximo 12')
    .max(12, 'Mes final no valido, minimo 1, maximo 12')
    .required('Mes final requerido'),
  thruYear: Yup.number()
    .typeError('El año final debe ser un numero')
    .required('Año final requerido')
    .min(2022, 'Año final no valido, minimo 2022, maximo 2030')
    .max(2030, 'Año final no valido, minimo 2022, maximo 2030')
})

export interface CreditCardForm{
  cvv: string
  fromMonth: string
  fromYear: string
  number: string
  owner: string
  thruMonth: string
  thruYear: string
}
export const initCreditCard:CreditCardForm = {
  cvv: '',
  fromMonth: '',
  fromYear: '',
  number: '',
  owner: '',
  thruMonth: '',
  thruYear: ''
}

export default CreditCardSchema
