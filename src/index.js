import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses createRoot
import App from './App'; // Make sure App.js is in the same src folder
import './index.css'; // Optional, for custom styles (if any)

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app inside StrictMode for development best practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
