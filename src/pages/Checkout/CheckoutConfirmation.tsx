import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CheckoutConfirmationStyle from './CheckoutConfirmationStyle'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import { setConfirmCheckout, CartProduct } from '../../app/features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Variants, AnimatePresence } from 'framer-motion'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { useEffect } from 'react'

export interface RESDataCreateCart{
  _id: string
}

export interface REQDataCreateCart{
  products: CartProduct[]
}
const CheckoutConfirmation = () => {
  const cartProducts = useSelector((state:RootState) => state.cart.products)
  const user = useSelector((state:RootState) => state.user.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataCreateCart, REQDataCreateCart>()
  const container:Variants = {
    exit: { opacity: 0 },
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  useEffect(() => {
    if (res?.data) {
      dispatch(setConfirmCheckout({ _id: res.data._id }))
      navigate('/cart/shipping', { replace: true })
    }
  }, [res])

  const CheckoutProducts = () => {
    const checkoutHandler = () => {
      if (user?._id && user?.address)
        axiosFn({
          axiosInstance,
          method: 'post',
          requestConfig: {
            data: {
              products: cartProducts
            }
          },
          url: import.meta.env.VITE_POST_CREATE_CART_EP
        })
      else navigate('/sign/login', { replace: true })
    }
    return (
      <>
        <AnimatePresence>
          {cartProducts.map((product, index) =>
            <CheckoutProduct
              name={product.name}
              price={product.price}
              photo={product.photo}
              _id={product._id}
              quantity={product.quantity}
              key={product._id}
              index={index}
              />)}
          </AnimatePresence>
        <h3 className='cart__total-price'>Total: $
          {cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0) }
        </h3>
        <button className="cart__checkout-btn" onClick={checkoutHandler}>
          Confirmar compra
        </button>
        {!loading && err &&
            <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
      </>)
  }
  const emptyCart = () => {
    return (
        <div className="empty-cart">
            <p className="empty-cart__message">Carrito vacio :(</p>
            <Link className="empty-cart__link" to='/'> Volver a la pagina principal</Link>
        </div>

    )
  }
  return (
    <CheckoutConfirmationStyle variants={container} initial="hidden" animate="show">
      {cartProducts.length ? CheckoutProducts() : emptyCart()}
    </CheckoutConfirmationStyle>
  )
}

export default CheckoutConfirmation
