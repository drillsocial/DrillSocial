import React from 'react';
import ReactDOM from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <h1 style={{ color: 'limegreen' }}>🔥 IT WORKS!</h1>
      </React.StrictMode>
    );
  } else {
    console.error("Could not find #app element");
  }
});
