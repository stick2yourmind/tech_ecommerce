import getFileUrl from '../../utils/publicFile.utils'
import StyleHome from './StyleHome'
import Slider from '../../components/Slider/Slider'
const Home = () => {
  return (
    <StyleHome>
      <img src={getFileUrl('/img/main-carousel/notebook.webp')}
        alt="notebook" className='home-head-img'/>
      <div className='home-slider-container'>
        <Slider endpoint={import.meta.env.VITE_GET_CAT_GPU_ENDPOINT}
          title="Placas de video" />
      </div>

      <div className='home-slider-container'>
        <Slider endpoint={import.meta.env.VITE_GET_CAT_PRINTER_ENDPOINT}
          title="Impresoras" />
      </div>

      <div className='home-slider-container'>
        <Slider endpoint={import.meta.env.VITE_GET_CAT_NOTEBOOK_ENDPOINT}
          title="Notebooks" />
      </div>
    </StyleHome>
  )
}

export default Home
