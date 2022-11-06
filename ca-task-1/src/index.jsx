import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  // strictMode - rodo klaidas develop aplinkoj, buildinime - istrinamas automatiskai
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
);
