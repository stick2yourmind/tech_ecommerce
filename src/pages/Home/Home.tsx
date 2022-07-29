import { useEffect } from 'react'
import getFileUrl from '../../utils/publicFile.utils'
import StyleHome from './StyleHome'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import useAxiosFunction from '../../hooks/useAXiosFn'
import axiosInstance from '../../app/api/axios'
import { SuccessfulAPIResponse, RESDataGetAllProducts } from '../../hooks/types.hooks'
import CardContainer from '../../components/CardContainer/CardContainer'
const Home = () => {
  const [response, error, loading, axiosFetch] = useAxiosFunction()
  useEffect(() => {
    const getData = () => {
      axiosFetch({
        axiosInstance,
        method: import.meta.env.VITE_GET_ALL_PRODUCTS_METHOD,
        url: import.meta.env.VITE_GET_ALL_PRODUCTS_ENDPOINT
      })
    }
    getData()
  }, [])

  return (
    <StyleHome>
      <img src={getFileUrl('/img/main-carousel/notebook.webp')}
        alt="notebook" className='home-head-img'/>
      <div className='home-slider-container'>
        <Slider title="Placas de video" back next
          backHandler={() => console.log('atras')} nextHandler={() => console.log('adelante')}>
            <CardContainer endpoint={import.meta.env.VITE_GET_CAT_GPU_ENDPOINT}/>
        </Slider>
      </div>

      <div className='home-slider-container'>
        <Slider title="Impresoras" back next
          backHandler={() => console.log('atras')} nextHandler={() => console.log('adelante')}>
            <CardContainer endpoint={import.meta.env.VITE_GET_CAT_PRINTER_ENDPOINT}/>
        </Slider>
      </div>

      <div className='home-slider-container'>
        <Slider title="Notebook" back next
          backHandler={() => console.log('atras')} nextHandler={() => console.log('adelante')}>
            <CardContainer endpoint={import.meta.env.VITE_GET_CAT_NOTEBOOK_ENDPOINT}/>
        </Slider>
      </div>
    </StyleHome>
  )
}

export default Home
