import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Footer = () => (
  <div className="w-full flex flex-col pt-4 justify-center bg-zinc-500 text-white">
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
    <div className="text-center text-black py-2 mt-2 bg-zinc-400">
      Ankit Sharma | Full Stack Java Developer
    </div>
  </div>
);

export default Footer;
