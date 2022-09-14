import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/add-task';

const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add Task
  const addTask: subAddTaskProp = async (task: subTaskProp) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask: onDeleteFCProp = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
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
      <Header title="Task Tracker" showAddForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
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
