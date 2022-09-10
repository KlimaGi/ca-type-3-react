import React from 'react';
import styles from './header.module.scss';
import Button from './button';

type HeaderProps = {
  title: string
};

// css in js
// const headingStyle = {
//   color: 'darkcyan',
// };

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className={styles.header}>
    <h1>
      {title}
    </h1>
    <Button color="green" text="Hello" />
    <Button color="purple" text="Hello 1" />
    <Button text="Hello 1" />
  </header>

);

export default Header;
