import getFileUrl from '../../utils/publicFile.utils'
import StyleHome from './StyleHome'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
const Home = () => {
  return (
    <StyleHome>
      <img src={getFileUrl('/img/main-carousel/notebook.webp')}
        alt="notebook" className='home-head-img'/>
      <div className='home-slider-container'>
        <Slider title="Placas de video" back next
          backHandler={() => console.log('atras')} nextHandler={() => console.log('adelante')}>
            <div className="card-container">
              <Card description="1"/>
              <Card description="2"/>
              <Card description="3"/>
              <Card description="4"/>
              <Card description="5"/>
            </div>
        </Slider>
      </div>

    </StyleHome>
  )
}

export default Home
