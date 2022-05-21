import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
      className="h-screen flex flex-col  w-full bg-zinc-800 px-32 pt-16"
    >
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="font-bold text-6xl w-fit text-white">About Me</h1>
        <p className="text-white w-2/5 mt-16">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          velit ex? Deserunt, nam qui tempora quas minima recusandae est magnam
          consequuntur ipsa praesentium incidunt accusantium perspiciatis quasi
          eaque facere ipsam.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
