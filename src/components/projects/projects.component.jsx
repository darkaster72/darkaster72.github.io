import { motion } from "framer-motion";

const Projects = () => (
  <motion.div layout>
    <section
      id="projects"
      className="h-screen flex flex-col  w-full bg-zinc-800 px-32 pt-16"
    >
      <h1 className="font-bold text-6xl w-fit text-white">Projects</h1>
      <p className="text-white w-2/5 mt-16">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, velit
        ex? Deserunt, nam qui tempora quas minima recusandae est magnam
        consequuntur ipsa praesentium incidunt accusantium perspiciatis quasi
        eaque facere ipsam.
      </p>
    </section>
  </motion.div>
);

export default Projects;
