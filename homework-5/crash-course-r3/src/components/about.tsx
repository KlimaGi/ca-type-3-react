import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.scss';

const About = () => (
  <div className={styles.about}>
    <h4>Version 1.0.0</h4>
    <Link to="/">Go Back</Link>
  </div>
);

export default About;
