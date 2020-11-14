import React, { useEffect } from "react";
import ReactGA from "react-ga";
import AboutMe from "./components/about/AboutMe";
import ContactMe from "./components/contact/ContactMe";
import HeroScreen from "./components/hero/HeroScreen";
import Separator from "./components/separator/Separator";
import Skills from "./components/skills/Skills";
import WorkExhibitor from "./components/workCarousel/WorkExhibitor";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-181730786-1");
    ReactGA.pageview("/");
  });

  return (
    <>
      <HeroScreen />
      <Separator orientation="x" />
      <AboutMe />
      <Separator orientation="x" />
      <Skills />
      <Separator orientation="x" />
      <WorkExhibitor />
      <Separator orientation="x" />
      <WorkExperience />
      <Separator orientation="x" />
      <ContactMe />
    </>
  );
}

export default App;
