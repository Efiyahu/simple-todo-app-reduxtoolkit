import React from 'react';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Redux Todo-App</h1>
    </header>
  );
}

export default Header;
