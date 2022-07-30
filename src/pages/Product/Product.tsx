import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductStyle from './ProductStyle'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { RESDataGetProductById } from '../../hooks/types.hooks'

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
  console.log(res.data?.description.replace(/(?:\\\\n)/g, '\n'))
  return (
    <ProductStyle>
      {loading && <p>Loading</p>}
      {!loading && err &&
          <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
      }
      <div className="product-detail">
        <div className="product-detail-info">
          <img src={res.data?.photo} alt={res?.data?.name} className="product-detail__img"/>
            <pre className="product-detail__description">
            {res.data?.description.replace(/(?:\\n)/g, String.fromCharCode(10))}
            </pre>
        </div>
        <div className="product-detail-buy"></div>
      </div>
    </ProductStyle>
  )
}

export default ProductDetail
