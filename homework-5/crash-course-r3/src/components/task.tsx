import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './task.module.scss';

type TaskFCProp = ({ task: TaskProp });

const Task: React.FC<TaskFCProp> = ({ task }) => (
  <div className={styles.task}>
    <h3>
      {task.text}
      <FaTimes style={{ color: 'indianred', cursor: 'pointer' }} />
    </h3>
    <p>{task.day}</p>
  </div>
);

export default Task;
