import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Feature from "./helper/Feature";

const Experience = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({ y: 0, opacity: 1 });
    }
  }, [control, inView]);
  return (
    <div className="relative bg-[#020917] min-h-[60rem] px-20 pt-72 -mt-40 rounded-b-[4rem] z-40">
      <div
        className="relative flex flex-col items-center justify-start max-w-7xl mx-auto"
        ref={ref}
      >
        <img
          src={require("../images/Path 318.png")}
          className="w-[5rem]"
          alt="path"
        />
        <div className="headline mt-7 flex flex-col items-center text-center text-[2rem]">
          <motion.h3
            animate={control}
            initial={{ y: 25, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            An Amazing App Can Change Your Daily Life
          </motion.h3>
          <motion.span
            animate={control}
            initial={{ y: 25, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-bold"
          >
            Music Experience
          </motion.span>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-around mt-24 w-full">
          <Feature icon="Group 2" title="For Live Music" delay={0.1} />
          <Feature icon="music icon" title="For Daily Music" delay={0.5} />
          <Feature icon="Group 4" title="For Artists" delay={0.9} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
