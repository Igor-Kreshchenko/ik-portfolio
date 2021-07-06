import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Container from '../Container';
import MenuButton from '../MenuButton';
import Navbar from '../Navbar';
import styles from './Header.module.scss';

class Header extends Component {
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

            {navIsVisible && <Navbar />}
            {buttonIsVisible && (
              <MenuButton isNav={navIsVisible} onClick={menuBtnHandler} />
            )}
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
