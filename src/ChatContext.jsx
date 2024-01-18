
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [userMessages, setUserMessages] = useState([{
    ms1: "hello",
    ms2: "hello2"
  },{
    ms1 : "user2 hello",
    ms2: "user2 hello2"
  }]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const sendMessage = () => {
    
    const updatedMessages = userMessages.map((user) => ({ ...user, message }));
    setUserMessages(updatedMessages);

    
    setMessage('');
    closeModal();
  };

  return (
    <ChatContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        message,
        setMessage,
        sendMessage,
        userMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
