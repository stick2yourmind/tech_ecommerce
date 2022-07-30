import { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCreateProduct, loadCart } from '../../app/features/cartSlice'
import addIcon from './add.svg'
import subtractIcon from './subtract.svg'
import { Product } from '../../hooks/types.hooks'
import { RootState } from '../../app/store'

const MIN_QUANTITY_DEF = 0

export const ProductCounter = ({ _id, price, stock, name, photo }:Product) => {
  const cart = new Map(useSelector((state:RootState) => state.cart.cart))
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(() => {
    dispatch(loadCart())
    const localQuantity = cart.get(_id)?.quantity
    if (localQuantity) return localQuantity
    return 0
  })

  const validateInput = (e:ChangeEvent<HTMLInputElement>) => {
    let quantity = MIN_QUANTITY_DEF
    if (Number(e.target.value) > MIN_QUANTITY_DEF && Number(e.target.value) <= stock)
      return setQuantity(Math.trunc(+e.target.value))
    Number(e.target.value) > stock && (quantity = stock)
    setQuantity(quantity)
  }

  return (
    <div className="counter">
        <div className="counter__img-input-container">
        <img
            alt={ `Subtract one ${name}` }
            className='counter__img'
            onClick={() => quantity > MIN_QUANTITY_DEF && setQuantity(quantity - 1)}
            src={subtractIcon}
        />
        <input
            max={stock}
            min={MIN_QUANTITY_DEF}
            onChange={ validateInput }
            type='number'
            value={quantity}
            className="counter__input"
        >
        </input>
        <img
            alt={ `Add one ${name}` }
            className='counter__img'
            onClick={ () => quantity < stock && setQuantity(quantity + 1) }
            src={addIcon}
        />
        </div>
        <button
            className="counter__btn"
            onClick={ () => dispatch(updateCreateProduct({ _id, name, photo, price, quantity }))}
        >
            {!quantity ? 'Comprar' : 'Actualizar cantidad'}
        </button>
    </div>
  )
}
export default ProductCounter
