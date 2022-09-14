import React from 'react';
import styles from './header.module.scss';
import Button from './button';

type HeaderProps = {
  title: string,
  showAddForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
};

// css in js
// const headingStyle = {
//   color: 'darkcyan',
// };

const Header: React.FC<HeaderProps> = ({ title, showAddForm }) => (
  <header className={styles.header}>
    <h1>
      {title}
    </h1>
    <Button color="green" text="Add" onClick={showAddForm} />
  </header>

);

export default Header;
