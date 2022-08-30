import React from 'react';
import logo from './logo.png';
import './App.css';
import Paragraph from './paragraph';
import Button from './components/button';
import TextField from './components/text-field';

// ManoParagrafas({
//   content: 'Pirmas paragrafas'
// })


const App: React.FC = () => {

  const title = 'Aplikacija';
  const linkText = 'React ismok';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {title} </p>
        <Paragraph content='Pirmas paragrafas' author='Some Jerk' />
        <Paragraph content='Antras paragrafas' >
          <div>
            <p>My paragraph content</p>
          </div>
        </Paragraph>
        <Button color='light'>First click</Button>
        <Button color='mid'>Second click</Button>
        <Button color='error'>Second click</Button>
        <TextField />
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
