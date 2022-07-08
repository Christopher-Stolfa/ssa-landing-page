import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('ssa_landing_page'));

const target = document.getElementById('ssa_landing_page');
target &&
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );