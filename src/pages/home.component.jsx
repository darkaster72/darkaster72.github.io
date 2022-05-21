import { motion } from "framer-motion";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import AboutUs from "../components/about-us/about-us.component";
import Projects from "../components/projects/projects.component";
import "./home.styles.css";

const HomePage = () => (
  <motion.div layoutScroll>
    <section
      id="home"
      className="h-screen flex justify-center items-center bg-zinc-800"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, scale: 0.3 },
          visible: { opacity: 1, scale: 1.2 },
        }}
        className="text-white"
      >
        <p className="text-2xl font-semibold">Hi, I am</p>
        <p className="text-8xl font-bold ">Ankit</p>
        <p className="text-6xl font-thin tracking-wider">Sharma</p>
      </motion.div>
      <div className="absolute bottom-4 flex justify-center">
        <ArrowDown className="animate-bounce text-purple-300 bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center" />
      </div>
    </section>
    <AboutUs></AboutUs>
    <Projects />
    <section
      id="skills"
      className="h-screen flex flex-col  w-full bg-zinc-800 px-32 pt-16"
    >
      <h1 className="font-bold text-6xl w-fit text-white">Skills</h1>
      <p className="text-white w-2/5 mt-16">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit
        ex? Deserunt, nam qui tempora quas minima recusandae est magnam
        consequuntur ipsa praesentium incidunt accusantium perspiciatis quasi
        eaque facere ipsam.
      </p>
    </section>
  </motion.div>
);

export default HomePage;
