import React from 'react';
import Message from './Message'
const MessageList=({messageList,onMessageSelect})=>{
  return(
    <div>
    {messageList.map(message =>
      <Message
      onMessageSelect={onMessageSelect}
      id={message.id}
      read={message.read}
      labels={message.labels}
      starred={message.starred}
      selected={message.selected}
      key={message.id}> {message.subject} </Message>)}
    </div>
  )
}
export default MessageList;
