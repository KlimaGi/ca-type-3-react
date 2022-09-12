import React from 'react';
import styles from './task.module.scss';

type TaskFCProp = ({ task: TaskProp });

const Task: React.FC<TaskFCProp> = ({ task }) => (
  <div className={styles.task}>
    <h3>{task.text}</h3>
    <p>{task.day}</p>
  </div>
);

export default Task;
