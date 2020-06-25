import React, { useState, useEffect } from "react";

const getMessages = async () => {
  const response = await fetch("http://localhost:5000/api/v1/messages");
  return await response.json();
}
export default (props) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages().then(data => setMessages(data));
  }, []);

  return (
    <div>
      {messages.length === 0 && <span>There are no messages</span>}
      {messages.length > 0 && messages.map(message => (
        <div key={message.id}><b>id:</b> {message.id}: {message.message} </div>
      ))
      }
    </div>
  )
}
