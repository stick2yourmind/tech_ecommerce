import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import ChatAdminStyle from './ChatAdminStyle'
import SendImg from '../../assets/img/send.svg'
import useSocket from '../../hooks/useSocket'
import { useDispatch, useSelector } from 'react-redux'
import {
  setClientId, setConnections, setConversation,
  setConversationTo, WRAdminClient
} from '../../app/features/adminChatSlice'
import { RootState } from '../../app/store'

export interface WSConnections{
  clientId: string
  email: string
  role: string
}
export interface DataWs{
  clientId?: string
  connections?: WSConnections
  msg?: string
  systemResponse?: boolean
}
export interface SendDataWs{
  msg: string
  room: string
}
export interface Session{
  clientId: string,
  conversation: DataWs[]
}
const ChatAdmin = () => {
  const [msg, setMsg] = useState<string>('')
  const [socket, clientId] = useSocket()
  const dispatch = useDispatch()
  const sessions = useSelector((state:RootState) => state.adminChat.sessions)
  const connections = useSelector((state:RootState) => state.adminChat.connections)
  const QClients = useSelector((state:RootState) => state.adminChat.clientsConnected)
  const currentClientIndex = useSelector((state:RootState) => state.adminChat.currentIndexSession)
  const currentClientId = useSelector((state:RootState) => state.adminChat.currentClientId)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sendWs = (data:SendDataWs) => {
    socket && socket.emit('privateMessages', data)
    dispatch(setConversation({ msg: data.msg, systemResponse: true }))
    if (scrollRef.current)
      scrollRef.current.scrollTo({ behavior: 'smooth', top: scrollRef.current.scrollHeight })
    console.log('sended')
  }

  const onSubmitChat = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (msg !== '') {
      currentClientId && sendWs({ msg, room: currentClientId })
      setMsg('')
    }
  }
  useEffect(() => {
    socket && socket.on('messages', data => console.log(data)) &&

    socket.on('privateMessages', (data:WRAdminClient) => {
      dispatch(setConversationTo({
        clientId: data.clientId,
        msg: data.msg,
        systemResponse: data.systemResponse
      }))
    }) &&

    socket.on('connections', (data:{connections:WSConnections[]}) => {
      console.log(data)
      dispatch(setConnections(data.connections))
    })

    return () => { socket?.close() }
  }, [socket])

  return (
    <ChatAdminStyle>
      <div className="connections">
      {connections && connections.map(conn =>
        conn.clientId !== clientId && <button key={conn.clientId}
        className={currentClientId === conn.clientId ? 'chat__client-id--chatting' : 'chat__client-id'}
          onClick={() => dispatch(setClientId(conn.clientId))}
        >
          <p>{conn.clientId}</p>
          <p>{conn.email ? conn.email : 'usuario no logeado'}</p>
        </button>)}
        {!QClients && <p className="chat__no-clients-connected-msg">No hay clientes conectados</p>}
      </div>
      {currentClientId &&
      <div className="chat">
        <div className="chat__body" ref={scrollRef}>
          {currentClientIndex !== undefined &&
          sessions[currentClientIndex]?.conversation.map((data, i) =>
              <div key={i} className={data.systemResponse
                ? 'chat__msg-container--client'
                : 'chat__msg-container--system'}>
                  <p className='chat__msg'>
                    {data.msg}
                  </p>
              </div>
          )}
        </div>
        <form action="" className="chat__footer" onSubmit={onSubmitChat}>
          <input type="text" className="chat__input" name='msg'
          value={msg}
          onInput={(e:ChangeEvent<HTMLInputElement>) => { setMsg(e.target.value) }}
          disabled={!connections.some(conn => conn.clientId === currentClientId)}
          />
          <button className="chat__send-btn">
            <img src={SendImg} alt="send message" className='chat__send-img' />
          </button>
        </form>
          {!connections.some(conn => conn.clientId === currentClientId) &&
          <p className='chat__disconnected-client-msg'>El cliente ha abandonado la sala de chat,
          no es posible responder la conversación</p>}
      </div> }
    </ChatAdminStyle>
  )
}

export default ChatAdmin
