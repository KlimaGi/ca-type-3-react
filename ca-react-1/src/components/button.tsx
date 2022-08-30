import * as React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.container}>{children}</button>
  )
}

export default Button;