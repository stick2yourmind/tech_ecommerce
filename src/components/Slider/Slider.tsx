import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from '../../app/api/axios'
import useAxiosFunction from '../../hooks/useAXiosFn'
import { RESDataGetAllProducts } from '../../hooks/types.hooks'
import Card from '../../components/Card/Card'
import { motion } from 'framer-motion'
import backwardStep from './backward-step.svg'
import SliderStyle from './SliderStyle'

interface SliderProps {
  endpoint: string
  title?: string;
}
const Slider:React.FC<SliderProps> =
({ endpoint, title }) => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)
  const [transX, setTransX] = useState<number>(0)
  const [res, err, loading, axiosFn] = useAxiosFunction<RESDataGetAllProducts>()
  useEffect(() => {
    const getData = () => {
      axiosFn({
        axiosInstance,
        method: 'get',
        url: endpoint
      })
    }
    getData()
  }, [])
  useEffect(() => {
    const calculateConstraint = () => {
      if (constraintsRef.current?.scrollWidth === undefined ||
        constraintsRef.current?.offsetWidth === undefined)
        return 0
      return constraintsRef.current?.scrollWidth - constraintsRef.current?.offsetWidth
    }
    // console.log(constraintsRef)
    setWidth(() => calculateConstraint())
  }, [res])
  return (
    <SliderStyle>
    <h3 id='slider-title'>{title}</h3>
    <img className='slider-step' id='slider-step-backward' src={backwardStep}
        alt="backward" onClick={
          () => setTransX(prev => {
            if (prev < 0)
              return prev + 260
            return prev
          })
        }
      />
    <motion.div ref={constraintsRef} style={{ overflow: 'hidden' }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: transX }}
        className="card-container">
          {loading && <p>Loading</p>}
          {!loading && err &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
          {res?.data?.products &&
            res.data.products.map(product =>
              <Card img={product.photo} name={product.name} price={product.price} key={product._id}
                id={product._id}
              />
            )}
      </motion.div>
    </motion.div>
    <img className='slider-step' id='slider-step-forward' src={backwardStep}
            alt="forward" onClick={
              () => setTransX(prev => {
                if (prev + width > 0)
                  return prev - 260
                return prev
              })}
          />
      </SliderStyle>
  )
}

export default Slider
