/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './add-task.module.scss';
import stylesBtn from './button.module.scss';

type AddTaskFcProp = {
  onAdd: subAddTaskProp,
};

const AddTask: React.FC<AddTaskFcProp> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add task');
    }
    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className={styles['add-form']} onSubmit={onSubmit}>
      <div className={styles['form-control']}>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles['form-control']}>
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div
        className={`${styles['form-control']} ${styles['form-control-check']}`}
      >
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          // value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className={`${stylesBtn.btn} ${styles['btn-block']}`} />
    </form>
  );
};

export default AddTask;
