import React from 'react';
import Task from './task';

type TasksFCProps = ({
  tasks: TaskProp[],
  onDelete: onDeleteFCProp,
  onToggle: toggleReminderProp
});

const Tasks: React.FC<TasksFCProps> = ({ tasks, onDelete, onToggle }): JSX.Element => (
  <>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </>
);

export default Tasks;
