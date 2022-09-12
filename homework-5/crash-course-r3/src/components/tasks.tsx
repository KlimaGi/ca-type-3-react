import React from 'react';
import Task from './task';

type TasksFCProps = ({ tasks: TaskProp[] });

const Tasks: React.FC<TasksFCProps> = ({ tasks }): JSX.Element => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </>
);

export default Tasks;
