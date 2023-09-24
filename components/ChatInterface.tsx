// ChatInterface.tsx
import React, { useState, useEffect, useRef } from 'react';
import OpenAI from "openai";
import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake'; // Import pdfMake
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as FileSaver from 'file-saver'; // Import FileSaver


// Initialize pdfMake with fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export default function ChatInterface() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [showInitialMessage, setShowInitialMessage] = useState<boolean>(true);

  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  
  const sendToOpenAI = async (message) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": 
                "You only offer metal health advice",
                    },{
                    "role": "user", "content": message}],
        max_tokens: 10 // You can adjust this based on your desired response length
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
  
    // Create separate user and assistant messages
    const userMessage = newMessage;
    const assistantResponse = response;
  
    // Combine the user message and assistant response
    const updatedMessages = [...messages, userMessage, assistantResponse];
  
    console.log('Updated Messages:', updatedMessages);
  
    setMessages(updatedMessages);
    setNewMessage('');
    setShowInitialMessage(false); // Hide the initial message
  };
  
  
  
  

/*const { PDFDocument, rgb } = require("pdf-lib");
const fs = require("fs");

const saveTextArrayAsPDF = async (outputFilePath: string) => {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the PDF
    const page = pdfDoc.addPage([600, 400]); // Adjust page size as needed

    // Create a font
    const helveticaFont = await pdfDoc.embedFont(PDFDocument.StandardFonts.Helvetica);

    // Set the font and size for the text
    page.drawText([messages, setMessages].join("\n"), {
      x: 50,
      y: 350, // Adjust the y-coordinate for text positioning
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0), // Black color
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Write the bytes to a file
    fs.writeFileSync(outputFilePath, pdfBytes);

    console.log(`PDF saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error saving PDF:", error);
  }
};
*/
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
  const pdfDoc = pdfMake.createPdf(pdfContent);

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

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="bg-gray-400 p-4 text-white w-full max-w-md rounded-lg shadow-lg">
        {showInitialMessage && (
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">Speak your mind.</p>
          </div>
        )}
        <div
          ref={chatBoxRef}
          className="chat-box mb-4 overflow-y-auto" // Set overflow to 'auto' to hide scroll bar
          style={{ maxHeight: '300px' }} // Set a max height
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message === 'Alrighty' ? 'bg-black text-white' : 'bg-blue-200 text-white'
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
            rows={3} // Start with a single row
            ref={textareaRef}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-600 text-white p-2 rounded-r-lg ml-2"
            onClick={handleSavePdf} // Handle PDF generation and download
          >
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
