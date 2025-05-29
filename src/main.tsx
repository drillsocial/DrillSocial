import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <h1 style={{ color: 'limegreen' }}>🔥 IT WORKS!</h1>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
}