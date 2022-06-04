import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Feature = ({ title, icon, delay = 0.1, duration = 0.8 }) => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, control]);
  return (
    <div
      ref={ref}
      className="flex items-center justify-center flex-col relative text-center m-12"
    >
      <motion.div
        animate={control}
        initial={{ y: 10, opacity: 0 }}
        transition={{ delay, duration }}
        className="bg-[#081730] rounded-2xl p-4"
      >
        <img
          src={require(`../../images/${icon}.png`)}
          className="w-12"
          alt="icon"
        />
      </motion.div>
      <motion.h3
        animate={control}
        initial={{ y: 10, opacity: 0 }}
        transition={{ delay: delay + 0.2, duration }}
        className="mt-5"
      >
        {title}
      </motion.h3>
      <motion.span
        animate={control}
        initial={{ y: 10, opacity: 0 }}
        transition={{ delay: delay + 0.3, duration }}
        className="text-[#707070] mt-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </motion.span>
      <motion.a
        animate={control}
        initial={{ y: 10, opacity: 0 }}
        transition={{ delay: delay + 0.4, duration }}
        className="text-[#E600FF] underline mt-5"
        href="#"
      >
        Learn more
      </motion.a>
    </div>
  );
};

export default Feature;
