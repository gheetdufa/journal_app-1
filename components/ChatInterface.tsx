// ChatInterface.tsx
"use client";
import React, { useState, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default Enter key behavior (form submission)
      handleSendMessage(); // Trigger the message sending function
    }
  };

  // Use useEffect to automatically click the "Send" button when Enter key is pressed
  useEffect(() => {
    const button = document.getElementById('sendButton');
    if (button) {
      button.click();
    }
  }, [messages]); // Use messages as the dependency

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 flex-grow">
      <div className="bg-gray-200 h-full p-4">
        <div className="chat-box mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-blue-200 p-2 rounded-lg mb-2"
              style={{ overflowWrap: 'break-word' }}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-2 rounded-l-lg"
            placeholder="Send a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Handle Enter key press
          />
          <button
            id="sendButton"
            className="bg-black- text-white p-2 rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
