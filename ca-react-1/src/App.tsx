import React from 'react';
import logo from './logo.png';
import './App.css';
import Paragraph from './paragraph';

// ManoParagrafas({
//   content: 'Pirmas paragrafas'
// })


function App() {

  const title = 'Aplikacija';
  const linkText = 'React ismok';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {title} </p>
        <Paragraph content='Pirmas paragrafas' author='Some Jerk' />
        <Paragraph content='Antras paragrafas' />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </header>
    </div>
  );
}

export default App;
