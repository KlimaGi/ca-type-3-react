import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // strictMode - rodo klaidas develop aplinkoj, buildinime - istrinamas automatiskai
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
