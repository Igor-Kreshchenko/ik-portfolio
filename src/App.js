import React from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills/Skills';
import EducationList from './components/EducationList';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Section>
          <About />
        </Section>

        <Section title={'Projects'}>
          <Portfolio />
        </Section>

        <Section title={'Skills'}>
          <Skills />
        </Section>

        <Section title={'Education'}>
          <EducationList />
        </Section>

        <Section title={'Contacts'}>
          <Contacts />
        </Section>

        <Footer />
      </Container>
    </>
  );
}

export default App;
