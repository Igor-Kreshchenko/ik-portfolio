import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footerLink}
        href="https://github.com/Igor-Kreshchenko/ik-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch this project on GitHub
      </a>
      <p className={styles.text}>2021</p>
    </footer>
  );
};

export default Footer;
