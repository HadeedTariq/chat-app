const MessageBar = (props) => {
  const {getMessage,input,sendMessage}=props;
  return (
    <>
      <div className="message">
        <input type="text" value={input} onChange={(e)=>getMessage(e)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default MessageBar