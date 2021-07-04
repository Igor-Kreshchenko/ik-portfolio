import React from 'react';
import { techSkills, softSkills } from '../../data/skills.json';
import SkillList from './SkillList';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <SkillList title={'Tech_skills'} items={techSkills} />
      <SkillList title={'Soft_skills'} items={softSkills} />
    </div>
  );
};

export default Skills;
