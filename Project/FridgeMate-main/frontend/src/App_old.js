import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/fridge-items') // Adjust the URL to your API endpoint
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        <p>Liste</p>
        {items.map(item => (
          <li key={item.id}>{item.itemName} - Expires on: {item.expirationDate}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
