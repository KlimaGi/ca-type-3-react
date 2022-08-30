import * as React from 'react';
import styles from './text-field.module.css';

const TextField: React.FC = () => {
  return (
    <div className={styles.container}>
      <label></label>
      <input type="text" />
    </div>
  )
}

export default TextField;