import React, { useState, useEffect } from 'react'
import CreditCardPaymentStyle from './CreditCardPaymentStyle'
import chipImg from './img/chip.png'
import mapImg from './img/map.png'
import patternImg from './img/pattern.png'
import { motion } from 'framer-motion'

import CreditCardSchema, { initCreditCard, CreditCardForm } from '../../app/schema/creditCard.schema'

import { Formik, Form as FormikForm, Field, useFormikContext, ErrorMessage } from 'formik'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { cleanCart } from '../../app/features/cartSlice'

const variants = {
  showBack: { rotateY: -180, transition: { duration: 0.1 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  showFront: { rotateY: 0, transition: { duration: 0.1 } }
}

export interface ProductOrder{
  _id: string,
  description: string,
  name: string,
  photo: string,
  price: number,
  quantity: number
}

export interface RESDataCreateOrder{
  _id: string
  cartId: string
  checkoutAddress: string
  orderNumber: number
  products: ProductOrder[]
  status: 'Generated'
  time: Date
  user: string
}

export interface REQDataCreateOrder{
  cartId: string
  creditCard: CreditCardForm
}

export interface FormObserverProps{
  setCvv: React.Dispatch<React.SetStateAction<string>>,
  setFromMonth: React.Dispatch<React.SetStateAction<string>>,
  setFromYear: React.Dispatch<React.SetStateAction<string>>,
  setNumber: React.Dispatch<React.SetStateAction<string>>,
  setOwner: React.Dispatch<React.SetStateAction<string>>,
  setThruMonth: React.Dispatch<React.SetStateAction<string>>,
  setThruYear: React.Dispatch<React.SetStateAction<string>>
}
const FormObserver: React.FC<FormObserverProps> = ({
  setNumber, setCvv, setFromMonth,
  setFromYear, setThruMonth, setThruYear, setOwner
}) => {
  const { values } = useFormikContext<CreditCardForm>()
  useEffect(() => {
    setNumber(values.number)
    setCvv(values.cvv)
    setFromMonth(values.fromMonth)
    setFromYear(values.fromYear)
    setThruMonth(values.thruMonth)
    setThruYear(values.thruYear)
    setOwner(values.owner)
  }, [values]); return null
}

const CreditCardPayment = () => {
  const [rotate, setRotate] = useState(false)
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataCreateOrder, REQDataCreateOrder>()
  const [number, setNumber] = useState('            ')
  const [cvv, setCvv] = useState('')
  const [fromMonth, setFromMonth] = useState('')
  const [fromYear, setFromYear] = useState('')
  const [thruMonth, setThruMonth] = useState('')
  const [thruYear, setThruYear] = useState('')
  const [owner, setOwner] = useState('')
  const navigate = useNavigate()
  const cartId = useSelector((state:RootState) => state.cart._id)
  const dispatch = useDispatch()
  const onSubmitPayment = (formValues:CreditCardForm) => {
    const data: REQDataCreateOrder = {
      cartId: cartId as string,
      creditCard: {
        cvv: formValues.cvv,
        fromMonth: formValues.fromMonth,
        fromYear: formValues.fromYear,
        number: formValues.number,
        owner: formValues.owner,
        thruMonth: formValues.thruMonth,
        thruYear: formValues.thruYear
      }
    }
    axiosFn({
      axiosInstance,
      method: 'post',
      requestConfig: { data },
      url: import.meta.env.VITE_POST_CREATE_ORDER_EP
    })
  }
  useEffect(() => {
    if (res.statusCode === 200) {
      dispatch(cleanCart())
      navigate('/', { replace: true })
    }
  }, [res])
  return (
    <CreditCardPaymentStyle>
      {!cartId
        ? <Navigate to="/sign/login" replace={true} />
        : (<>
      <div className="card-container">
        <div className="card" onClick={() => setRotate(prev => !prev)}>
          <motion.div className="card__inner"
            variants={variants}
            animate={rotate ? 'showBack' : 'showFront'}
          >
            <div className="card__front">
              <img src={mapImg} alt="" className="card__front-background" />
              <div className="card__row">
                <img src={chipImg} alt="" className='card__chip'/>
              </div>
              <div className="card__row">
                <p className="card__number">{number.slice(0, 4) || ''}</p>
                <p className="card__number">{number.slice(4, 8) || ''}</p>
                <p className="card__number">{number.slice(8, 12) || ''}</p>
                <p className="card__number">{number.slice(12, 16) || ''}</p>
              </div>
              <div className="card__row">
                <p className="card__valid-text">VALID FROM</p>
                <p className="card__valid-date">{fromMonth.slice(0, 2)}/{fromYear.slice(0, 4)}</p>
                <p className="card__valid-text">VALID THRU</p>
                <p className="card__valid-date">{thruMonth.slice(0, 2)}/{thruYear.slice(0, 4)}</p>
              </div>
              <div className="card__row">
                <p className="card__owner-name">{owner}</p>
              </div>
            </div>
            <div className="card__back">
              <img src={mapImg} alt="" className="card__back-background" />
              <div className="card__magnetic-bar"></div>
              <div className="card__row">
                <div className="card__security">
                  <img src={patternImg} alt="" className="card__pattern-signature" />
                  <div className="card__cvv">{cvv.slice(0, 3)}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <h3 className='form__title'>Ingresa los datos de tu tarjeta</h3>
      <Formik
        initialValues={initCreditCard}
        validationSchema={CreditCardSchema}
        onSubmit={onSubmitPayment}
      >
        <FormikForm className='form__body'>
          <FormObserver setNumber={setNumber} setCvv={setCvv} setFromMonth={setFromMonth}
          setFromYear={setFromYear} setThruMonth={setThruMonth}
          setThruYear={setThruYear} setOwner={setOwner}
          />
          <Field label='number' name='number' type='text' placeholder="Numero de tarjeta"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setNumber(text)}
          pattern="[0-9]*" minLength="16" maxLength="16"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="number" component="p" />
          </div>
          <Field label='valid from month' name='fromMonth' type='text'
          placeholder="Mes inicial de validez"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setFromMonth(text)}
          pattern="[0-9]*" minLength="2" maxLength="2"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="fromMonth" component="p" />
          </div>
          <Field label='valid from year' name='fromYear' type='text'
          placeholder="Año inicial de validez"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setFromYear(text)}
          pattern="[0-9]*" minLength="4" maxLength="4"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="fromYear" component="p" />
          </div>
          <Field label='valid thru month' name='thruMonth' type='text'
          placeholder="Mes final de validez"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setThruMonth(text)}
          pattern="[0-9]*" minLength="2" maxLength="2"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="thruMonth" component="p" />
          </div>
          <Field label='valid thru year' name='thruYear' type='text'
          placeholder="Año final de validez"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setThruYear(text)}
          pattern="[0-9]*" minLength="4" maxLength="4"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="thruYear" component="p" />
          </div>
          <Field label='owner' name='owner' type='text'
          placeholder="Cliente de la tarjeta"
          onFocus={() => setRotate(false)}
          // onFocu={(text:string) => setOwner(text)}
          maxLength="20"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="owner" component="p" />
          </div>
          <Field label='cvv' name='cvv' type='text' placeholder="CVV"
          onFocus={() => setRotate(true)}
          // onFocu={(text:string) => setCvv(text)}
          pattern="[0-9]*" minLength="3" maxLength="3"
          />
          <div className='error'>
            <ErrorMessage className='error__msg' name="cvv" component="p" />
          </div>
          <button className='form__submit-btn' type='submit'>Confirmar</button>
          {!loading && err &&
            <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
        </FormikForm>
      </Formik>
      {loading && <p>Confirmando datos</p>}
      </>)}
    </CreditCardPaymentStyle>
  )
}

export default CreditCardPayment
