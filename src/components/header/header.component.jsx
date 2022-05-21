import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <header className="absolute flex px-36 pt-8 w-full justify-between align-baseline font-bold text-white">
    <a href="#home">
      <Logo className="h-12 w-12"></Logo>
    </a>
    <div className="flex gap-x-8 text-xl">
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#about"
      >
        About me
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#skills"
      >
        Skills
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href="#projects"
      >
        Projects
      </motion.a>
    </div>
  </header>
);

export default Header;
