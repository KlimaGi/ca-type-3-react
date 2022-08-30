import * as React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode,
  color?: 'light' | 'mid' | 'error' | 'dark'
}

const Button: React.FC<ButtonProps> = ({ color = 'light', children }) => {
  return (
    <button className={styles.btn + ' ' + styles[color]}>{children}</button>
  )
}

export default Button;