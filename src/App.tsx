import React from "react";
import AboutMe from "./components/about/AboutMe";
import ContactMe from "./components/contact/ContactMe";
import HeroScreen from "./components/hero/HeroScreen";
import Separator from "./components/separator/Separator";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  return (
    <>
      <HeroScreen />
      <Separator orientation="x" />
      <AboutMe />
      <Separator orientation="x" />
      <Skills />
      <Separator orientation="x" />
      <WorkExperience />
      <Separator orientation="x" />
      <ContactMe />
    </>
  );
}

export default App;
