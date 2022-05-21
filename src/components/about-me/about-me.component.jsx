import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutMe = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center w-full bg-zinc-800 px-4 lg:px-32 pt-16"
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h2 className="font-bold text-6xl w-fit text-white">About Me</h2>
        <p className="text-white w-2/5 mt-16">
          My name is Ankit Sharma. I am a Full Stack Java Developer based in
          India 🇮🇳. I am passionate about writing clean code and always like to
          learn new things.
          <br />
          Apart from coding I like to meditate and watch movies
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
