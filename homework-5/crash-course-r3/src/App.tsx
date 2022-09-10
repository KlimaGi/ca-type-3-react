import React from 'react';
import Header from './components/header';

import './App.css';

const App = () => {
  const name: string = 'BRAD';
  return (
    <div className="container">

      <span>
        Hello

        {name}
      </span>
      <Header />
    </div>
  );
};

export default App;
