import React from 'react';
import styles from './button.module.scss';

type ButtonProp = {
  text: string
  color?: string,
};

const Button: React.FC<ButtonProp> = ({ color, text }) => (
  <button style={{ backgroundColor: color }} className={styles.btn}>{text}</button>
);

Button.defaultProps = {
  color: 'powderblue',
};

export default Button;
