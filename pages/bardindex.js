import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { analyzeText } from '../index';

const IndexPage = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const suggestions = await analyzeText(text);
    setSuggestions(suggestions);

    router.push('/suggestions');
  };

  return (
    <div>
      <h1>Mental Health Suggestions</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
};

export default IndexPage;