import React from 'react'

const ChatBar = (props) => {
  const {messages,name}=props
  return (
    <div className="chat-box">
            {
            messages?.map(({message,user},index)=>
            <div className={`container ${user!==name?'me':""}`} key={index}>
              <div className="msgs">
                <strong>{user}</strong>
                <p>{message}</p>
              </div>
            </div>
            )
            }
        </div>
  )
}

export default ChatBar