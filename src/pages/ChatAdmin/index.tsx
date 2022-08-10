import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import ChatAdminStyle from './ChatAdminStyle'
import SendImg from '../../assets/img/send.svg'
import useSocket from '../../hooks/useSocket'

// const connections = [
//   { clientId: '2f502a2e-51d6-4aed-804e-47f9071ad4e8', email: undefined, role: undefined },
//   { clientId: '60021435-06b1-4b92-8d68-378610be969c', email: 'gon@hisoka.com', role: '444' },
//   { clientId: 'd2fd742d-441f-4e2c-ad72-450cec9582bf', email: 'hisoka@gon.com', role: '444' },
//   { clientId: 'f5e3734f-5e34-4150-85f7-967deed0b528', email: 'stk2@gmail.com', role: '777' }
// ]
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
  clientId: string
  conversation: DataWs[]
}
const ChatAdmin = () => {
  const [connections, setConnections] = useState<WSConnections[]>([])
  const [session, setSession] = useState<Session>()
  const [msg, setMsg] = useState<string>('')
  const [socket, clientId] = useSocket()
  const [conversations, setConversations] = useState<Session[]>([])

  const currentSession = (clientId:string) => {
    const current = conversations.find(conversation => conversation.clientId === clientId)
    return { clientId, conversation: current?.conversation ? current.conversation : [] }
  }

  const sendWs = (data:SendDataWs) => {
    socket && socket.emit('privateMessages', data)
    setConversations(conversations => {
      return conversations.filter(conversation => {
        if (conversation?.clientId !== session?.clientId)
          return conversation
        return [{
          clientId: conversation.clientId,
          conversation: [...conversation.conversation, data]
        }]
      })
    })
    console.log('sended')
  }

  const onSubmitChat = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    session && sendWs({ msg, room: session?.clientId })
  }
  useEffect(() => {
    socket && socket.on('messages', data => console.log(data)) &&
    socket.on('privateMessages', data => {
      console.log('mensaje de potencial cliente: ', data)
      if (data.connections) setConnections(data.connections)
      else setConversations(conversations => {
        return conversations.filter(conversation => {
          if (conversation?.clientId !== session?.clientId)
            return conversation
          return [{
            clientId: conversation.clientId,
            conversation: [...conversation.conversation, data]
          }]
        })
      })
    })

    return () => { socket?.close() }
  }, [socket])

  return (
    <ChatAdminStyle>
      <div className="connections">
      {connections && connections.map(conn =>
        conn.clientId !== clientId && <button key={conn.clientId}
        className={session?.clientId === conn.clientId ? 'chat__client-id--chatting' : 'chat__client-id'}
          onClick={() => setSession(currentSession(conn.clientId))}
        >
          <p>{conn.clientId}</p>
          <p>{conn.email ? conn.email : 'usuario no logeado'}</p>
        </button>)}
      </div>
      {session?.clientId &&
      <div className="chat">
        <div className="chat__body">
          {session?.conversation.map((data, i) =>
              <div key={i} className={data.systemResponse
                ? 'chat__msg-container--system'
                : 'chat__msg-container--client'}>
                  <p className='chat__msg'>{data.msg}</p>
              </div>
          )}
        </div>
        <form action="" className="chat__footer" onSubmit={onSubmitChat}>
          <input type="text" className="chat__input" name='msg'
          value={msg}
          onInput={(e:ChangeEvent<HTMLInputElement>) => { setMsg(e.target.value) }}/>
          <button className="chat__send-btn">
            <img src={SendImg} alt="send message" className='chat__send-img' />
          </button>
        </form>
      </div> }
    </ChatAdminStyle>
  )
}

export default ChatAdmin
