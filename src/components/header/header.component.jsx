import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  const links = [
    { label: "About me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];
  return (
    <header className="absolute flex px-36 pt-8 w-full justify-between align-baseline font-bold text-white">
      <a href="#home">
        <Logo className="h-12 w-12"></Logo>
      </a>
      <div className="flex gap-x-8 text-xl">
        {links.map(({ label, id }) => (
          <motion.a
            key={id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href={`#${id}`}
            onClick={(e) => {
              let hero = document.getElementById(id);
              e.preventDefault();
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;
