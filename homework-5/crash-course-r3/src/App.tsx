import React from 'react';
import Header from './components/header';
import Tasks from './components/tasks';

const App = () => (
  <div className="container">

    <Header title="Hello" />
    <Tasks />
  </div>
);

export default App;
