import { motion } from "framer-motion";
import AboutMe from "../components/about-me/about-me.component";
import Projects from "../components/projects/projects.component";
import Hero from "./Hero";
import "./home.styles.css";
import Skills from "./Skills";

const HomePage = () => (
  <motion.div layoutScroll>
    <Hero />
    <AboutMe></AboutMe>
    <Projects />
    <Skills />
  </motion.div>
);

export default HomePage;
