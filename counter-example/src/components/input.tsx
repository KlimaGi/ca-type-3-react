import React from 'react';
import styles from './input.module.scss';

// type InputProps = React.DetailedHTMLProps<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement>;

type InputProps = JSX.IntrinsicElements['input'];

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={styles.input + (className ? ` ${className}` : '')}
    {...props}
  />

);

export default Input;
