import React from 'react';
import classes from './header.module.scss';
import Button from './button';

const Header = () => {
  return (
    <header className={classes.showcase}>
      <h1 className={classes.h1}>Welcome To The Mountains</h1>
      <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
      <Button />
    </header >

  )
}

export default Header;
