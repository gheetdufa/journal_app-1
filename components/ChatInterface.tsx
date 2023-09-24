// ChatInterface.tsx
import React, { useState, useEffect, useRef } from 'react';
import OpenAI from "openai";
import axios from 'axios';
import pdfmake from 'pdfmake/build/pdfmake'; // Import pdfMake
import pdffonts from 'pdfmake/build/vfs_fonts';

import * as FileSaver from 'file-saver'; // Import FileSaver


// Initialize pdfMake with fonts 
pdfmake.vfs = pdffonts.pdfMake.vfs;


export default function ChatInterface() {
  const [messages, setMessages] = useState<string[]>([]);
  const textToType = 'Lorem ipsum typing effect!';
  const [newMessage, setNewMessage] = useState<string>('');
  const [showInitialMessage, setShowInitialMessage] = useState<boolean>(true);

  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  //const chunkSize = 300;
 // const chunks = [];
  const sentencesToProcess = [
    "Sentence 1",
    "Sentence 2",
    "Sentence 3",
    // Add more sentences as needed
  ];
  
  const sendToOpenAI = async (message) => {
    try {
      const userMessageTokens = message.split(" ").length;
      const maxTokens = 1024; // Adjust buffer size as needed

      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": 
                "Immediatley start giving mental health suggestions, dont use a list.",
                    },{
                    "role": "user", "content": message}],
                    max_tokens: maxTokens, // Use the adjusted max_tokens value

        //max_tokens: 70, // You can adjust this based on your desired response length
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
      });
      const generatedResponse = response.data.choices[0].message.content;
      return generatedResponse;
    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
      return 'An error occurred while generating a response.';
    }
  };
  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
  
    // Send the user's message to OpenAI and get a response
    const response = await sendToOpenAI(newMessage);
    console.log('Response from OpenAI:', response);
  
    // Split the AI's response into sentences
    const aiSentences = response.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
  
    // Create bullet-point list for AI responses with new lines
    const aiResponsesList = aiSentences.map(aiSentence => `- ${aiSentence}\n`).join('');
  
    // Combine the AI responses into the chat
    const assistantResponses = aiResponsesList;
  
    // Add a new line before the AI responses if there are previous messages
    const updatedMessages = messages.length > 0
      ? [...messages, '', assistantResponses] // Add an empty line for separation
      : [assistantResponses]; // No previous messages, just AI responses
  
    // Clear the input field and hide the initial message
    setNewMessage('');
    setShowInitialMessage(false);
  
    // Update the chat messages
    setMessages(updatedMessages);
  };
  
  //end of function here
  const handleSavePdf = () => {
    // Define the content for the PDF
    const pdfContent = {
      content: [
        { text: 'Chat Messages', style: 'header' },
        { ul: messages }, // Convert messages to a bulleted list
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };
  
  
    // Create a PDF document
    const pdfDoc = pdfmake.createPdf(pdfContent);
  
  
    // Download the PDF
    pdfDoc.download('chat_messages.pdf');
  };
  
  
   
  
  
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Dynamically adjust the height of the textarea as the user types
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
  
  
      // Update the newMessage state
      setNewMessage(e.target.value);
    };
  
  
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevent the default Enter key behavior (form submission)
        handleSendMessage(); // Trigger the message sending function
      }
    };
  
  useEffect(() => {
    const button = document.getElementById('sendButton');
    if (button) {
      button.click();
    }
    
    // Auto-scroll to the bottom of the chat box
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);
  const processSentences = async () => {
    for (const sentence of sentencesToProcess) {
      const response = await sendToOpenAI(sentence);
      console.log('Input Sentence:', sentence);
      console.log('Response from OpenAI:', response);
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-800 w-full h-full flex items-center justify-center">
      <div className="bg-neutral-700 p-4 text-white w-screen mx-5 h-fit rounded-lg shadow-lg">
        {showInitialMessage && (
          <div className="text-center mb-4 mt-6">
            <p className="text-lg font-semibold">
            Speak your mind.</p>
          </div>
        )}
        <div
          ref={chatBoxRef}
          className="chat-box mb-4 overflow-y-auto" // Set overflow to 'auto' to hide scroll bar
          style={{ maxHeight: '150' }} // Set a max height
        >
          {messages.map((message, index) => (
           <div
           key={index}
           className={`${
             message.startsWith('- ') ? 'text-white' : 'bg-black text-white'
           } p-2 rounded-lg mb-2`}
           style={{ overflowWrap: 'break-word' }}
         >
              {message}
            </div>
          ))}
        </div>
        <div className="flex">
          <textarea
            id="message"
            rows={4} // Start with a single row
            ref={textareaRef}
            className="block p-2.5 w-full mx-0 text-sm text-gray-900 bg-gray-50 "
            placeholder="Write your thoughts here..."
            value={newMessage}
            onChange={handleInputChange} // Handle input change
            onKeyPress={handleKeyPress} // Handle Enter key press
            style={{ height: 'auto' }} // Automatically adjust the height
          />
          <button
            id="sendButton"
            className="bg-gray-600 text-white p-2 rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>

          <button
            id="savePdf"
            className="bg-gray-600 text-white p-2 rounded-lg ml-2"
            onClick={handleSavePdf} // Handle PDF generation and download
          >
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
