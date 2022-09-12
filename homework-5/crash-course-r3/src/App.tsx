import React, { useState } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'some appointment',
      day: 'Nov 9th at 2:30pm',
      reminder: true,
    }, {
      id: 2,
      text: 'some call',
      day: 'Sep 20th at 10:00am',
      reminder: true,
    }, {
      id: 3,
      text: 'some other call',
      day: 'Sep 24th at 2:30pm',
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
