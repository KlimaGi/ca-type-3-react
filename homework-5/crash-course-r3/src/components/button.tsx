import React from 'react';
import styles from './button.module.scss';

type ButtonProp = {
  text: string,
  onClick(event: React.MouseEvent<HTMLButtonElement>): void,
  color?: string,
};

const Button: React.FC<ButtonProp> = ({ color, text, onClick }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: color }}
    className={styles.btn}
  >
    {text}
  </button>
);

Button.defaultProps = {
  color: 'powderblue',
};

export default Button;
