import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const { data } = await axios.get("http://localhost:8000/chats");
    setChats(data);
  };
  console.log("data:", chats);

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <>
      <div>sdfjkb</div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </>
  );
};

export default ChatPage;
