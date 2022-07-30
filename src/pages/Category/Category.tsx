import React, { useEffect } from 'react'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { RESDataGetAllProducts } from '../../hooks/types.hooks'
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
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataGetAllProducts>()
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
  return (
    <CategoryStyle variants={container} initial="hidden" animate="show" >
      <h1 className='category__title'>{title}</h1>
            {loading && <p>Loading</p>}
            {!loading && err && err.toLowerCase() !== 'canceled' &&
                <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
            }
      <div className='category__items'>
            {res.data?.products &&
              res.data.products.map((product, i) =>
                <Card img={product.photo} name={product.name} price={product.price} key={product._id}
                  id={product._id} index={i}/>)
            }
        </div>
      </CategoryStyle>
  )
}

export default Category
