import React, { useState } from 'react';

// type TasksProps = {
//   id: number,
//   text: string,
//   day: string,
//   reminder: boolean
// };

const Tasks = () => {
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
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  );
};

export default Tasks;
