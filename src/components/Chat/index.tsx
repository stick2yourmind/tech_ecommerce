import ChatStyle from './ChatStyled'
import { motion, AnimatePresence } from 'framer-motion'
import openChatImg from './chat.svg'
import closeChatImg from './close-light.svg'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import logo from '../../assets/img/logo.svg'
import send from '../../assets/img/send.svg'
import useSocket from '../../hooks/useSocket'

// Websocket sent data by client
export interface WSClient{
  msg: string
}
// Websocket received data by client
export interface WRClient extends WSClient{
  systemResponse: boolean
}
// Conversation may save received or sent data
export interface Conversation{
  msg: WSClient['msg']
  systemResponse?: WRClient['systemResponse']
}
const Chat = () => {
  const [chat, setChat] = useState<boolean>(false)
  const [conversation, setConversation] = useState<Conversation[]>([
    {
      msg: 'Buen dia, ¿en que podemos ayudarte?',
      systemResponse: true
    }])
  const [msg, setMsg] = useState<string>('')
  const constraintsRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, clientId] = useSocket()

  const sendData = (data:WSClient) => {
    socket && socket.emit('privateMessages', data)
    if (scrollRef.current)
      scrollRef.current.scrollTo({ behavior: 'smooth', top: scrollRef.current.scrollHeight })
  }
  const onSubmitChat = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (msg !== '') {
      sendData({ msg })
      setConversation(prev => [...prev, { msg }])
      setMsg('')
    }
  }

  useEffect(() => {
    socket && socket.on('messages', data => console.log(data)) &&
    socket.on('privateMessages', data => {
      console.log(data)
      setConversation(prev => [...prev, data])
    })

    return () => { socket?.off('msgToClient'); socket?.close() }
  }, [socket])

  return (
    <ChatStyle ref={constraintsRef}>
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
        <div className="chat__body" ref={scrollRef}>
          {conversation && conversation?.map((data, i) =>
            <div key={i} className={data?.systemResponse
              ? 'chat__msg-container--system'
              : 'chat__msg-container--client'}>
                <p className='chat__msg'>
                  {data.msg}
                </p>
            </div>
          )}
        </div>
        <form action="" className="chat__footer" onSubmit={onSubmitChat}>
          <input type="text" className="chat__input" name='msg'
          value={msg}
          onInput={(e:ChangeEvent<HTMLInputElement>) => { setMsg(e.target.value) }}/>
          <button className="chat__send-btn">
            <img src={send} alt="send message" className='chat__send-img' />
          </button>
        </form>
        </motion.div>}
        </AnimatePresence>
      <button className='chat__toggler' >
          {!chat
            ? <motion.img src={openChatImg} alt="open chat" key="open-chat"
            className='chat__open-img'
            onClick={() => setChat(prev => !prev)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
            : <motion.img src={closeChatImg} alt="open chat" key="close-chat"
            className='chat__close-img'
            onClick={() => setChat(prev => !prev)}
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
