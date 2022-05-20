import "./home.styles.css";
import { motion } from "framer-motion";

const HomePage = () => (
  <div className="h-screen flex justify-center items-center  bg-gradient-to-r from-blue-500 to bg-purple-500">
    <div className="text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeInOut", duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, scale: 0.3 },
          visible: { opacity: 1, scale: 1.2 },
        }}
      >
        <p className="text-7xl font-bold tracking-wider">Ankit</p>
        <p className="text-6xl font-thin tracking-wide">Sharma</p>
      </motion.div>
    </div>
  </div>
);

export default HomePage;
