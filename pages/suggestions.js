import React from 'react';
import { useRouter } from 'next/router';

const SuggestionsPage = () => {
  const router = useRouter();
  const suggestions = router.query.suggestions;

  return (
    <div>
      <h1>Mental Health Suggestions</h1>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsPage;