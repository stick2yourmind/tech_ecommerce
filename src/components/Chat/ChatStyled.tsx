import styled from 'styled-components'
import { motion } from 'framer-motion'

const ChatStyle = styled(motion.div)`  
  position: sticky;
  bottom: 5.5rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  .chat{
    position: absolute;
    top: -18.5rem;
    min-height: 30rem;
    min-width: 40rem;
    cursor: grab;
    z-index: 10;
  }
  .chat__toggler{
    min-width: 6rem;
    min-height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--bg-dark);
  }
  .chat__open-img,.chat__close-img{
    padding: 1rem;
    width: 6rem;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(125deg) brightness(103%) contrast(103%);
  }
  .chat__close-img{
    width: 4.5rem;
  }
  .chat__header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0a0ad4;
}
.chat__logo {
  width: 3rem;
  margin: 1rem;
}
.chat__title {
  color: whitesmoke;
}
.chat__body {
  background-color: #0e0e2c75;
  height: 20rem;
  overflow-y: auto;
  padding: 1rem;
}
.chat__body div:last-child{
  margin-bottom: 4rem;
}
.chat__msg-container--client {
  display: flex;
  align-items: center;
  justify-content: end;
}
.chat__msg-container--system {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.chat__msg {
  background-color: #14B8A6;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  max-width: 27rem;
  border-radius: 0.8rem;
  margin: 0.5rem 0;
}
.chat__footer {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #0b0a0ad4;
}
.chat__input {
  min-height: 100%;
  flex-grow: 1;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
.chat__send-btn {
  background-color: transparent;
  padding: 0.5rem;
}
.chat__send-img{
  width: 3rem;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(125deg) brightness(103%) contrast(103%);
}
`
export default ChatStyle
