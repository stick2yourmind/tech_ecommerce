import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCreateProduct } from '../../app/features/cartSlice'
import addIcon from './add.svg'
import subtractIcon from './subtract.svg'
import { Product } from '../../hooks/types.hooks'
import { RootState } from '../../app/store'
import ProductCounterStyle from './ProductCounterStyle'

const MIN_QUANTITY_DEF = 0

export const ProductCounter = ({ _id, price, stock, name, photo } :
    Omit<Product, 'category' | 'description'>) => {
  const dispatch = useDispatch()
  const quantityOnCart = useSelector((state:RootState) =>
    state.cart.products.find(product => _id === product._id))?.quantity || 0
  const [quantity, setQuantity] = useState<number>(() => quantityOnCart || 0)
  return (
    <ProductCounterStyle>
        <div className="counter__selector">
        <img
            alt={ `Subtract one ${name}` }
            className='counter__img'
            onClick={() => quantity > MIN_QUANTITY_DEF &&
              setQuantity(quantity => quantity - 1)}
            src={subtractIcon}
        />
        <span className="counter__input">
          {quantity}
        </span>
        <img
            alt={ `Add one ${name}` }
            className='counter__img'
            onClick={ () => quantity < stock && setQuantity(quantity => quantity + 1)}
            src={addIcon}
        />
        </div>
        <button
            className="counter__btn"
            onClick={ () => dispatch(updateCreateProduct({ _id, name, photo, price, quantity }))}
        >
          Comprar
        </button>
    </ProductCounterStyle>
  )
}
export default ProductCounter
