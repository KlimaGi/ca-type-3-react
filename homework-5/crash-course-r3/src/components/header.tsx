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

const Header: React.FC<HeaderProps> = ({ title }) => {
  const onClick = () => {
    console.log('click from header');
  };
  return (
    <header className={styles.header}>
      <h1>
        {title}
      </h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>

  );
};

export default Header;
