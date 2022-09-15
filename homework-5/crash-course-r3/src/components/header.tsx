import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import Button from './button';

type HeaderProps = {
  title: string,
  showAddForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  showAdd: boolean,
};

// css in js
// const headingStyle = {
//   color: 'darkcyan',
// };

const Header: React.FC<HeaderProps> = ({ title, showAddForm, showAdd }) => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1>
        {title}
      </h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'indianred' : '#2c4b64'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={showAddForm}
        />
      )}
    </header>

  );
};

export default Header;
