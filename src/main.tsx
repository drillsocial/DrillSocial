// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional, only if this file exists

const root = document.getElementById('app');

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}