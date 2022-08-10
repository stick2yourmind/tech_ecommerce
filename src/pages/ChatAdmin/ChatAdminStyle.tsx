import styled from 'styled-components'

const ChatAdminStyle = styled.div`
  width: 80vw;
  min-height: calc(100vh - 9rem); 
  display: flex; 
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  padding: 3rem 0;
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
`

export default ChatAdminStyle
