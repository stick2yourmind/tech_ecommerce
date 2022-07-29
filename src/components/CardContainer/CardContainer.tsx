import React, { useEffect, useRef, useState } from 'react'
import axiosInstance from '../../app/api/axios'
import useAxiosFunction from '../../hooks/useAXiosFn'
import { SuccessfulAPIResponse, RESDataGetAllProducts } from '../../hooks/types.hooks'
import Card from '../../components/Card/Card'
import { motion } from 'framer-motion'
import backwardStep from '../Slider/backward-step.svg'
import SliderStyle from '../Slider/SliderStyle'
interface CardContainerProps {
  endpoint: string
  back: boolean;
  next: boolean;
  backHandler: (arg: void) => void;
  nextHandler: (arg: void) => void;
  title?: string;
}
const CardContainer:React.FC<CardContainerProps> =
({ endpoint, back, next, backHandler, nextHandler, title }) => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)
  const [transX, setTransX] = useState<number>(0)
  const [res, err, loading, axiosFn] = useAxiosFunction()
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
    console.log(constraintsRef)
    setWidth(() => calculateConstraint())
  }, [res])
  console.log(transX)
  console.log(width)
  return (
    <SliderStyle>
    <h3 id='slider-title'>{title}</h3>
    {back &&
      <img className='slider-step' id='slider-step-backward' src={backwardStep}
        alt="backward" onClick={() => backHandler()}
      />}
    <motion.div ref={constraintsRef} style={{ overflow: 'hidden' }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        animate={{ translateX: transX }}
        onClick={() => setTransX(prev => {
          if (prev + width > 0)
            return prev - 260
          return prev
        })}
        className="card-container">
          {loading && <p>Loading</p>}
          {!loading && err &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
          }
          {(res as SuccessfulAPIResponse <RESDataGetAllProducts>)?.data?.products &&
          (res as SuccessfulAPIResponse <RESDataGetAllProducts>).data.products.map(product =>
            <Card img={product.photo} name={product.name} price={product.price} key={product._id}
              id={product._id}/>
          )}
      </motion.div>
    </motion.div>
    {next &&
          <img className='slider-step' id='slider-step-forward' src={backwardStep}
            alt="forward" onClick={() => nextHandler()}
          />}
      </SliderStyle>
  )
}

export default CardContainer
