import React from 'react';
import Header from "./components/header";

import './App.css';

function App() {
  const name: string = 'BRAD';
  return (
    <div className="container">

      <h1>Hello {name}</h1>
      <Header />
    </div >
  );
}

export default App;
