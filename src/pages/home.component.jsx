import AboutMe from "../components/about-me/about-me.component";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/projects.component";
import Hero from "./Hero";
import "./home.styles.css";
import Skills from "./Skills";

const HomePage = () => (
  <>
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <Footer />
  </>
);

export default HomePage;
