// @ts-ignore
"use client";
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import ChatInterface from '@/components/ChatInterface';
/*
import React, { useState } from 'react';
import  Bard  from 'bard-ai'; // Import Bard class from 'bard-ai'

const bard = new Bard({
  apiKey: 'AIzaSyDsOpfcZgG78NIpODdS_z7HFUyyX1q2nD4',
});

async function analyzeText(text) {
const response = await bard.analyzeText({ text });
return response.suggestions;
}
*/
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100' style={{ height: 'screen' }}>
        </div>
        <ChatInterface />
    </>
  )
}

/*
const App: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleAnalyzeText = async () => {
    const bard = new Bard({
      apiKey: 'YOUR_BARD_API_KEY',
    });

    const response = await bard.analyzeText({
      text: 'I am feeling sad and hopeless today.',
    });

    setSuggestions(response.suggestions);
  };

  return (
    <div>
      <h1>Mental Health Suggestions</h1>
      <button onClick={handleAnalyzeText}>Analyze</button>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};
*/