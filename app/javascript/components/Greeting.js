import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = async () => {
    try {
      const response = await axios.get('/api/random_greeting');
      setGreeting(response.data.greeting);
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
