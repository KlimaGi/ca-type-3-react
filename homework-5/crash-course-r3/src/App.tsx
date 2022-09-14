import React, { useState } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/add-task';

const App: React.FC = () => {
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

  // Add Task
  const addTask: subAddTaskProp = (task: subTaskProp) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask: onDeleteFCProp = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder: toggleReminderProp = (id: number) => {
    setTasks(tasks.map((task) => (
      task.id === id
        ? { ...task, reminder: !task.reminder }
        : task)));
  };

  return (
    <div className="container">
      <Header title="Hello" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0
        ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        )
        : 'No tasks to show'}
    </div>
  );
};

export default App;
