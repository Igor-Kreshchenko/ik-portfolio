import React from 'react';
import Container from '../Container';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}></nav>
      </Container>
    </header>
  );
};

export default Header;
