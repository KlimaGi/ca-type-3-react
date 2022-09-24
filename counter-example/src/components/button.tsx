import React from 'react';
import styles from './button.module.scss';

type ButtonProps = JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => (
  <button
    type={type}
    className={styles.button + (className ? ` ${className}` : '')}
    {...props}
  >
    {children}
  </button>
);

export default Button;
