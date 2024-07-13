import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import AnimatedCursor from "react-animated-cursor";
const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={15}
        color="180, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
