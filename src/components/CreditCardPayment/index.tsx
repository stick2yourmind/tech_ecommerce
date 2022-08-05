import CreditCardPaymentStyle from './CreditCardPaymentStyle'
import chipImg from './img/chip.png'
import mapImg from './img/map.png'
import patternImg from './img/pattern.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  showBack: { rotateY: -180, transition: { duration: 0.1 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  showFront: { rotateY: 0, transition: { duration: 0.1 } }
}

const CreditCardPayment = () => {
  const [rotate, setRotate] = useState(false)
  return (
    <CreditCardPaymentStyle>
      <div className="card-container">
        <div className="card" onClick={() => setRotate(prev => !prev)}>
          <motion.div className="card__inner"
            variants={variants}
            animate={rotate ? 'showBack' : 'showFront'}
          >
            <div className="card__front">
              <img src={mapImg} alt="" className="card__front-background" />
              <div className="card__row">
                <img src={chipImg} alt="" className='card__chip'/>
              </div>
              <div className="card__row">
                <p className="card__number">0000</p>
                <p className="card__number">1111</p>
                <p className="card__number">2222</p>
                <p className="card__number">3333</p>
              </div>
              <div className="card__row">
                <p className="card__valid-text">VALID FROM</p>
                <p className="card__valid-date">01/2022</p>
                <p className="card__valid-text">VALID THRU</p>
                <p className="card__valid-date">01/2025</p>
              </div>
              <div className="card__row">
                <p className="card__owner-name">Juan Carlos Rodriguez</p>
              </div>
            </div>
            <div className="card__back">
              <img src={mapImg} alt="" className="card__back-background" />
              <div className="card__magnetic-bar"></div>
              <div className="card__row">
                <div className="card__security">
                  <img src={patternImg} alt="" className="card__pattern-signature" />
                  <div className="card__cvv">888</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </CreditCardPaymentStyle>
  )
}

export default CreditCardPayment
