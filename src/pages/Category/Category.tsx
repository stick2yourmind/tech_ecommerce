import React, { useEffect } from 'react'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { SuccessfulAPIResponse, RESDataGetAllProducts } from '../../hooks/types.hooks'
import Card from '../../components/Card/Card'
import CategoryStyle from './CategoryStyle'
import { Variants } from 'framer-motion'
interface CategoryProps{
  categoryEndpoint: string
  title: string
}

const Category:React.FC<CategoryProps> = ({ categoryEndpoint, title }) => {
  const container:Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const [res, err, loading, axiosFn] = useAxiosFunction()
  useEffect(() => {
    const getData = () => {
      axiosFn({
        axiosInstance,
        method: 'get',
        url: categoryEndpoint
      })
    }
    getData()
  }, [categoryEndpoint])
  console.log(res)
  return (
    <CategoryStyle variants={container} initial="hidden" animate="show" >
      <h1 className='category__title'>{title}</h1>
            {loading && <p>Loading</p>}
      <div className='category__items'>
            {!loading && err &&
                <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
            }
            {(res as SuccessfulAPIResponse <RESDataGetAllProducts>)?.data?.products &&
              (res as SuccessfulAPIResponse <RESDataGetAllProducts>).data.products.map((product, i) =>
                <Card img={product.photo} name={product.name} price={product.price} key={product._id}
                  id={product._id} index={i}/>)
            }
        </div>
      </CategoryStyle>
  )
}

export default Category
