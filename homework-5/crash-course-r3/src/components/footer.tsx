import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>Copyright &copy; 2022</p>
    <Link to="/about">About</Link>
  </footer>
);

export default Footer;
