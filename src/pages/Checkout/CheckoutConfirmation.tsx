import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CheckoutConfirmationStyle from './CheckoutConfirmationStyle'
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
import { setConfirmCheckout } from '../../app/features/cartSlice'
import { Link } from 'react-router-dom'
import { Variants, AnimatePresence } from 'framer-motion'

const CheckoutConfirmation = () => {
  const cartProducts = useSelector((state:RootState) => state.cart.products)
  const dispatch = useDispatch()
  const container:Variants = {
    exit: { opacity: 0 },
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const CheckoutProducts = () => {
    return (
      <>
        <AnimatePresence>
          {cartProducts.map((product, index) => <CheckoutProduct
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
        <button className="cart__checkout-btn" onClick={() => dispatch(setConfirmCheckout())}>
          Confirmar compra
        </button>
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
