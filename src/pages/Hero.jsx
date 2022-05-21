import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import AnimatedText from "../components/animated-text/animated-text.component";

export const placeholderText = [
  { type: "paragraph", text: "Hi! I am" },
  { type: "heading1", text: "Ankit Sharma" },
  {
    type: "heading2",
    text: "Full Stack Java Developer",
  },
];

export const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Hero = () => {
  return (
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
        <div className="flex gap-x-3 justify-center items-center flex-col">
          <div className="flex gap-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:sankit72@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/darkaster72"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/ankit72"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>
      <a
        href="#about"
        className="absolute bottom-4 flex justify-center"
        onClick={(e) => {
          let hero = document.getElementById("about");
          e.preventDefault();
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        <ArrowDown className="animate-bounce text-purple-300 bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center" />
      </a>
    </section>
  );
};

export default Hero;
