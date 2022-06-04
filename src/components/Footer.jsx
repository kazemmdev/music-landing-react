import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YoutubSvg from "../images/youtube.svg";
import TwitterSvg from "../images/twitter.svg";
import LinkedinSvg from "../images/linkedin.svg";
import FacebookSvg from "../images/facebook.svg";

const Footer = () => {
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
      className=" footer flex flex-col items-center justify-start p-20 bg-[#081730] min-h-[30rem] pt-[16rem] mt-[-10rem] relative -z-10"
    >
      <div className="flex w-[100%] justify-center mt-14 gap-10">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={control}
          className="rounded-full border-2 border-whit p-2"
        >
          <img src={YoutubSvg} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={control}
          className="rounded-full border-2 border-whit p-2"
        >
          <img src={TwitterSvg} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={control}
          className="rounded-full border-2 border-whit p-2"
        >
          <img src={LinkedinSvg} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={control}
          className="rounded-full border-2 border-whit p-2"
        >
          <img src={FacebookSvg} alt="" />
        </motion.div>
      </div>
      <span className="text-[1rem] text-gray-400 lg:px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </span>
    </div>
  );
};

export default Footer;
