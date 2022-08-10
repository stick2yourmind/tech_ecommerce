import styled from 'styled-components'

const ChatAdminStyle = styled.div`
  width: 80vw;
  min-height: calc(100vh - 9rem); 
  display: flex; 
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  padding: 3rem 0;
  gap: 3rem;
  .chat__client-id {
    width: 30rem;
    background-color: transparent;
    font-weight: semibold;
    font-weight: 500;
    color: #444;
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
    border: 2px solid #eee;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0.5rem 0.5rem 1rem #ccc,-0.5rem -0.5rem 1rem #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;
  }
  .chat__client-id--chatting {
    width: 30rem;
    background-color: transparent;
    font-weight: semibold;
    font-weight: 500;
    color: #444;
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
    border: 2px solid #eee;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0.5rem 0.5rem 1rem #ccc,-0.5rem -0.5rem 1rem #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;
    background-color: #36b09366;
    border-color: #3cd1c3;
  }
  .chat__client-id:hover,.chat__client-id--chatting:hover {
    box-shadow: 0.5rem 0.5rem 1rem #fff,-0.5rem -0.5rem 1rem #ccc;
  }
  .chat__client-id:active,.chat__client-id--chatting:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #ccc,inset -0.2rem -0.2rem 1rem #fff;
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
  .chat{
    min-width: 70rem;
  }
.chat__body {
  background-color: #0e0e2c75;
  height: 40rem;
  overflow-y: auto;
  padding: 1rem;
}
.chat__body div:last-child{
  margin-bottom: 4rem;
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

export default ChatAdminStyle
