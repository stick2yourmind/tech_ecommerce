import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WSConnections{
  clientId: string
  email: string
  role: string
}
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
export interface Session{
  clientId: string
  conversation: Conversation[]
}
export interface AdminChatState{
  connections: WSConnections[],
  currentClientId: string | undefined,
  currentIndexSession: number | undefined,
  sessions: Session[]
}
const initialState: AdminChatState = {
  connections: [],
  currentClientId: undefined,
  currentIndexSession: undefined,
  sessions: []
}
export type ClientId = Pick<Session, 'clientId'>
export const adminChatReducer = createSlice({
  initialState,
  name: 'adminChat',
  reducers: {
    setClientId: (state, action:PayloadAction<string>) => {
      state.currentClientId = action.payload
      const sessionIndex = state.sessions
        .findIndex(session => session.clientId === action.payload)
      if (sessionIndex === -1) {
        state.sessions.push({ clientId: action.payload, conversation: [] })
        state.currentIndexSession = state.sessions.length - 1
      } else
        state.currentIndexSession = sessionIndex
    },
    setConnections: (state, action:PayloadAction<WSConnections[]>) => {
      state.connections = action.payload
    },
    setConversation: (state, action:PayloadAction<Conversation>) => {
      console.log('🚀 ~ file: adminChatSlice.ts ~ line 57 ~ action.payload', action.payload)
      if (state.currentIndexSession || state.currentIndexSession === 0)
        state.sessions[state.currentIndexSession]
          .conversation
          .push({ msg: action.payload.msg, systemResponse: action.payload.systemResponse })
    }
  }
})

export const { setConnections, setConversation, setClientId } = adminChatReducer.actions
export default adminChatReducer.reducer
