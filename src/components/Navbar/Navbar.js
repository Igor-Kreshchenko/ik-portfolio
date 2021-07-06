import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, animateScroll as scroll } from 'react-scroll';
import Container from '../Container';
import MenuButton from '../MenuButton';
import sections from '../../data/sections.json';
import styles from './Navbar.module.scss';

class Navbar extends Component {
  state = {
    navIsVisible: false,
    buttonIsVisible: true,
  };

  componentDidMount() {
    this.toggleVisibility();
  }

  toggleVisibility = () => {
    const screenWidth = window.screen.width;

    screenWidth < 1280
      ? this.setState({ navIsVisible: false, buttonIsVisible: true })
      : this.setState({ navIsVisible: true, buttonIsVisible: false });
  };

  menuBtnHandler = () => {
    this.setState(prevState => ({
      navIsVisible: !prevState.navIsVisible,
    }));
  };

  render() {
    const { navIsVisible, buttonIsVisible } = this.state;
    const { menuBtnHandler } = this;

    return (
      <header className={styles.header}>
        <Container>
          <div className={styles.navBox}>
            <svg
              className={styles.navLogo}
              alt="Logo"
              width="50"
              height="30"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <use href="./svg/sprite.svg#icon-embed"></use>
            </svg>

            {navIsVisible && (
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
            )}

            {buttonIsVisible && (
              <MenuButton isNav={navIsVisible} onClick={menuBtnHandler} />
            )}
          </div>
        </Container>
      </header>
    );
  }
}

export default Navbar;
