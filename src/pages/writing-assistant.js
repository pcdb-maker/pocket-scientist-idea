import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const WritingAssistant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const getAIResponse = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/write-assistant', { prompt: input });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching AI response', error);
    }
  };

  return (
    <Layout>
    <div>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Ask for help with writing..."
        style={{ width: '100%', height: '100px', marginBottom: '10px' }}
      />
      <button onClick={getAIResponse} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
        Get Writing Assistance
      </button>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default WritingAssistant;
