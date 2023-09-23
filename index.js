const { Bard } = require('bard-ai');

const bard = new Bard({
  apiKey: 'YOUR_BARD_API_KEY',
});

async function analyzeText(text) {
  const response = await bard.analyzeText({ text });
  return response.suggestions;
}

