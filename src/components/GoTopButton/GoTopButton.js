import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './GoTopButton.module.scss';

class GoTopButton extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    const scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  };

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible && (
          <button
            className={styles.goTopBtn}
            onClick={() => scroll.scrollToTop()}
          >
            <svg width="50" height="50">
              <use href="./svg/top-button.svg#icon-circle-up"> </use>
            </svg>
          </button>
        )}
      </>
    );
  }
}

export default GoTopButton;
