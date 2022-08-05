import * as Yup from 'yup'

const street = /^[A-Za-z 0-9]*$/
// const textOnly = /^[A-Za-z ]*$/

const ShippingSchema = Yup.object({
  checkoutAddress: Yup.string()
    .matches(street, 'Nombre invalido')
    .max(50, 'Maximo 30 caracteres')
    .test('oneMethodSelected', 'Indique la direccion de envio',
      function (value) {
        if (!this.parent.pickUp && value === '')
          return false
        return true
      }
    ),
  pickUp: Yup.boolean()
})

export interface ShippingForm{
  checkoutAddress: string
  pickUp: boolean
}
export const initShipping:ShippingForm = {
  checkoutAddress: '',
  pickUp: false
}

export default ShippingSchema
