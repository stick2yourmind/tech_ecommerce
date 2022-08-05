import { useEffect, useState } from 'react'
import ShippingStyle from './ShippingStyle'
import { Formik, Form as FormikForm } from 'formik'
import ShippingSchema, { initShipping, ShippingForm } from '../../app/schema/shipping.schema'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import TextField from '../TextField'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { CartProduct } from '../../app/features/cartSlice'

export interface RESDataUpdShippingCart{
  _id: string
  checkoutAddress: string
  products: CartProduct[]
  user: string
}

export interface REQDataUpdShippingCart{
  checkoutAddress: string | undefined
  pickUp: boolean
}
const Shipping = () => {
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataUpdShippingCart, REQDataUpdShippingCart>()
  const navigate = useNavigate()
  const user = useSelector((state:RootState) => state.user.data)
  const cart = useSelector((state:RootState) => state.cart)
  const [pickUp, setPickUp] = useState(false)

  // it only is triggered after succesful validation
  const onSubmitShipping = (shippingValues:ShippingForm) => {
    const data: REQDataUpdShippingCart = {
      checkoutAddress: !pickUp
        ? (shippingValues.checkoutAddress === '' ? user?.address : shippingValues.checkoutAddress)
        : '',
      pickUp
    }

    axiosFn({
      axiosInstance,
      method: 'put',
      requestConfig: { data },
      url: import.meta.env.VITE_PUT_SHIPPING_CART_EP + cart._id
    })
  }
  useEffect(() => {
    if (res.statusCode === 200)
      navigate('/cart/payment', { replace: true })
  }
  , [res])
  return (
    <ShippingStyle>
      <h3 className='form__title'>Envio o retiro en el local</h3>
      <Formik
        initialValues={initShipping}
        validationSchema={ShippingSchema}
        onSubmit={onSubmitShipping}
      >
        <FormikForm className='form__body'>
          <TextField label='Direccion de envio' name='checkoutAddress' type='text'
            placeholder={user?.address} disabled={pickUp} info/>
          <label className='form__check-label' htmlFor="pickUp" onClick={() => setPickUp(prev => !prev)}>
            Retirar en el local
          <input className='form__check' type="checkbox" id='pickUp' name='pickUp' value='pickUp'
            />
          </label>
          <button className='form__submit-btn' type='submit'>Confirmar</button>
          {!loading && err &&
            <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
        </FormikForm>
      </Formik>
    </ShippingStyle>
  )
}

export default Shipping
