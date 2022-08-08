import ChatStyle from './ChatStyled'
import { motion, AnimatePresence } from 'framer-motion'
import openChatImg from './chat.svg'
import closeChatImg from './close-light.svg'
import { useRef, useState } from 'react'
import logo from '../../assets/img/logo.svg'
import send from '../../assets/img/send.svg'

const variants = {
  showBack: { rotateY: -180, transition: { duration: 0.1 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  showFront: { rotateY: 0, transition: { duration: 0.1 } }
}

const Chat = () => {
  const [chat, setChat] = useState<boolean>(false)
  const constraintsRef = useRef(null)
  return (
    <ChatStyle
    ref={constraintsRef}>
      <AnimatePresence>
      {chat && <motion.div key="chat" className='chat'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -130 }}
        transition={{ restDelta: 50, stiffness: 400, type: 'spring' }}
        exit={{ opacity: 0, transition: { duration: 0.3 }, y: 0 }}
        // drag="x"
        // dragSnapToOrigin={false}
        // dragConstraints={constraintsRef}
        >
        <div className='chat__header'>
          <img src={logo} alt="logo chat" className='chat__logo'/>
          <h1 className='chat__title'>@Labhard</h1>
        </div>
        <div className="chat__body">
          <div className="chat__msg-container--client"><p className="chat__msg">Hola</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Buen dia</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Como va?</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Se puede retirar hoy?</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Quiero una 3090</p></div>
          <div className="chat__msg-container--system"><p className="chat__msg">Hola, buen dia</p></div>
          <div className="chat__msg-container--system"><p className="chat__msg">Si, estamos hasta las 18hs</p></div>
          <div className="chat__msg-container--system"><p className="chat__msg">Si queres pasame tu nombre asi te la reservo</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Bueno</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Anotalo a nombre de Bankai</p></div>
          <div className="chat__msg-container--client"><p className="chat__msg">Te tengo que dejar una seña?</p></div>
        </div>
        <form action="" className="chat__footer">
          <input type="text" className="chat__input" />
          <button className="chat__send-btn">
            <img src={send} alt="send message" className='chat__send-img' />
          </button>
        </form>
        </motion.div>}
        </AnimatePresence>
      <button className='chat__toggler' onClick={() => setChat(prev => !prev)}>
          {!chat
            ? <motion.img src={openChatImg} alt="open chat" key="open-chat"
            className='chat__open-img'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
            : <motion.img src={closeChatImg} alt="open chat" key="close-chat"
            className='chat__close-img'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        }
      </button>
    </ChatStyle>
  )
}

export default Chat