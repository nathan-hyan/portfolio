import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import AboutMe from 'screens/AboutMe';
import ContactMe from 'screens/ContactMe';
import HeroScreen from 'screens/HeroScreen';
import Separator from 'screens/Separator';
import Skills from 'screens/Skills';
import WorkCarousel from 'screens/WorkCarousel';
import WorkExperience from 'screens/WorkExperience';

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('UA-181730786-1');
    ReactGA.pageview('/');
  });

  return (
    <>
      <HeroScreen />
      <Separator orientation="x" />
      <AboutMe />
      <Separator orientation="x" />
      <Skills />
      <Separator orientation="x" />
      <WorkCarousel />
      <Separator orientation="x" />
      <WorkExperience />
      <Separator orientation="x" />
      <ContactMe />
    </>
  );
};

export default App;
