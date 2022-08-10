import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { v4 as uuidv4 } from 'uuid'

const id = uuidv4()

const useSocket = () => {
  const [socket, setSocket] = useState<Socket>()
  const accessToken = useSelector((state:RootState) => state.user.data?.accessToken)
  useEffect(() => {
    const socketInstance = io(import.meta.env.VITE_WS_URL, {
      extraHeaders: accessToken ? { authorization: `Bearer ${accessToken}` } : undefined,
      query: {
        clientId: id
      }
    })
    setSocket(socketInstance)
    return () => {
      socketInstance &&
        socketInstance.disconnect() && socketInstance.close()
    }
  }, [setSocket, accessToken])
  const use:[Socket | undefined, string] = [socket, id]
  return (
    use
  )
}

export default useSocket
