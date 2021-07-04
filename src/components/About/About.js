import React from 'react';
import avatar from '../../images/avatar.png';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div>
        <div className={styles.imgWrapper}>
          <img className={styles.avatar} src={avatar} alt="" />
        </div>
        <h1 className={styles.name}>Igor_Kreshchenko</h1>
        <p className={styles.position}>.front-end .developer</p>
      </div>

      <p className={styles.text}>
        &#047;&#047; I'm an enthusiastic and detail-oriented Front-end developer
        seeking an entry-level position with Company to use my skills in coding,
        troubleshooting complex problems, and assisting in the timely completion
        of projects.
      </p>
    </div>
  );
};

export default About;
