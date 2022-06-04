import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DownloadAds from "./helper/DownloadAds";

const Download = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({ y: 0, opacity: 1 });
    }
  }, [control, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]"
    >
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      <div className="headline mt-7 flex flex-col items-center text-[2rem] text-center">
        <motion.span
          animate={control}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Download The Best Music
        </motion.span>
        <motion.span
          animate={control}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bold"
        >
          App Now!
        </motion.span>
        <motion.span
          animate={control}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[1rem] text-gray-400 lg:px-[15rem] text-center mt-[1rem]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </motion.span>
      </div>
      <motion.div
        animate={control}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-14"
      >
        <DownloadAds />
      </motion.div>
    </div>
  );
};

export default Download;
