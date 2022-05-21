import { motion } from "framer-motion";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import AboutMe from "../components/about-me/about-me.component";
import Projects from "../components/projects/projects.component";
import AnimatedText from "../components/animated-text/animated-text.component";
import "./home.styles.css";
import Skills from "./Skills";

const placeholderText = [
  { type: "paragraph", text: "Hi! I am" },
  { type: "heading1", text: "Ankit Sharma" },
  {
    type: "heading2",
    text: "Full Stack Java Developer",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const HomePage = () => (
  <motion.div layoutScroll>
    <section id="home" className="h-screen flex justify-center bg-zinc-800">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="text-white flex flex-col justify-center"
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
        {/* <p className="text-xl">Hi, I am</p>
        <p className="text-5xl font-semibold uppercase">Ankit Sharma</p>
        <p className="text-4xl font-serif mt-4">Full Stack Java Developer</p> */}
      </motion.div>
      <a href="#about" className="absolute bottom-4 flex justify-center">
        <ArrowDown className="animate-bounce text-purple-300 bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center" />
      </a>
    </section>
    <AboutMe></AboutMe>
    <Projects />
    <Skills />
  </motion.div>
);

export default HomePage;
