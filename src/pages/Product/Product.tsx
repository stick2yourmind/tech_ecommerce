import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductStyle from './ProductStyle'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { RESDataGetProductById } from '../../hooks/types.hooks'
import ProductCounter from '../../components/ProductCounter/ProductCounter'

const ProductDetail = () => {
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataGetProductById>()
  useState()
  const { productId } = useParams()
  useEffect(() => {
    const getData = () => {
      axiosFn({
        axiosInstance,
        method: 'get',
        url: import.meta.env.VITE_GET_PRODUCT_BY_ID + productId
      })
    }
    getData()
  }, [])
  return (
    <ProductStyle>
      {loading && <p>Loading</p>}
      {!loading && err &&
          <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
      }
      {res.data?._id &&
            <div className="product-detail">
            <div className="product-detail__info">
              <img src={res.data?.photo} alt={res?.data?.name} className="product-detail__img"/>
              <p className="product-detail__description">
                {res.data?.description.replace(/(?:\\n)/g, String.fromCharCode(10))}
              </p>
            </div>
            <div className="product-detail__buy">
              <h5 className='product-detail__title'>{res.data?.name}</h5>
              <h5 className='product-detail__price'>$ {res.data?.price}</h5>
              <ProductCounter
                _id={res.data?._id }
                price={res.data?.price}
                stock={res.data?.stock}
                name={res.data?.name}
                photo={res.data?.photo} />
            </div>
          </div>
      }
    </ProductStyle>
  )
}

export default ProductDetail
