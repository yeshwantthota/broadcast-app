import React from "react";
import ReactDOM from "react-dom";
import { useChat } from "../ChatContext";

const BroadcastModal = () => {
  const { modalOpen, closeModal, message, setMessage, sendMessage } = useChat();

  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div
      className="m-5 p-5 bg-gray-200 w-1/2 h-1/2 rounded-lg"
      style={{ display: modalOpen ? "block" : "none" }}
    >
      <div className="flex flex-col">
        <h2 className="ml-2">Broadcast Message</h2>
        <input
          className="rounded-xl p-2 m-2"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-300 p-2 w-1/3 m-2 rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
        <button
          className="bg-blue-300 p-2 w-1/3 m-2 rounded-lg"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default BroadcastModal;
