import React from 'react';
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <h1 style={{ color: 'limegreen' }}>🔥 IT WORKS!</h1>
      </React.StrictMode>
    );
  } else {
    console.error('Could not find #app element');
  }
});
