import React from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills/Skills';
import EducationList from './components/EducationList';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Section id="about">
          <About />
        </Section>

        <Section title={'Projects'} id="projects">
          <Portfolio />
        </Section>

        <Section title={'Skills'} id="skills">
          <Skills />
        </Section>

        <Section title={'Education'} id="education">
          <EducationList />
        </Section>

        <Section title={'Contacts'} id="contacts">
          <Contacts />
        </Section>

        <Footer />

        <GoTopButton />
      </Container>
    </>
  );
}

export default App;
