import {
  faAngular,
  faAws,
  faJava,
  faJs,
  faLinux,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [faJava, faJs, faAngular, faReact, faAws, faLinux];

  return (
    <section
      id="skills"
      className="h-screen justify-center place-items-center flex flex-col w-full bg-zinc-800 px-4 lg:px-32 pt-16"
    >
      <h1 className="font-bold text-6xl w-fit text-white text-center">
        Skills
      </h1>
      <div className="grid md:grid-cols-4 mt-12 gap-4 w-full gap-y-8 place-items-stretch">
        {skills.map((icon) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            key={icon.iconName}
            className="text-center"
          >
            <FontAwesomeIcon
              key={icon.iconName}
              icon={icon}
              className="text-white opacity-75 hover:opacity-100 pointer"
              size="4x"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
