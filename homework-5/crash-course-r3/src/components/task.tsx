import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './task.module.scss';

type TaskFCProp = ({
  task: TaskProp,
  onDelete: onDeleteFCProp,
  onToggle: toggleReminderProp
});

const Task: React.FC<TaskFCProp> = ({ task, onDelete, onToggle }) => (
  <div
    className={`${styles.task} ${task.reminder ? styles.reminder : ''}`}
    onDoubleClick={() => onToggle(task.id)}
  >
    <h3>
      {task.text}
      <FaTimes
        style={{ color: 'indianred', cursor: 'pointer' }}
        onClick={() => onDelete(task.id)}
      />
    </h3>
    <p>{task.day}</p>
  </div>
);

export default Task;
