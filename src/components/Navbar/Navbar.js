import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-scroll';
import sections from '../../data/sections.json';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav} id="navbar">
      <ul className={styles.navItems}>
        {sections.map(section => {
          const id = uuidv4();

          return (
            <Link
              className={styles.navLink}
              key={id}
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {section}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
