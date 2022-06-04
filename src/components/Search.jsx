import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MouseParallax from "./helper/MouseParallax";

const Search = () => {
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
      className="relative w-full px-20 bg-[#081730] overflow-hidden rounded-b-[4rem] -mt-60 py-32 z-30"
    >
      <div className="relative min-h-[36rem] flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="relative min-h-[36rem] w-full lg:flex-[1]">
          <MouseParallax>
            <motion.img
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={require("../images/backgraphics.png")}
              offset="40"
              alt=""
              className="absolute top-[16rem] left-[-20rem]"
            />
            <motion.img
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={require("../images/d1.png")}
              offset="30"
              alt=""
              className="absolute top-[10rem] left-[10rem] w-[16rem]"
            />
            <motion.img
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={require("../images/d2.png")}
              offset="26"
              alt=""
              className="absolute top-[18rem] left-[12rem] w-[8rem]"
            />
            <motion.img
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={require("../images/d3.png")}
              offset="22"
              alt=""
              className="absolute top-[18rem] left-[21rem] w-[7.6rem]"
            />
            <motion.img
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={require("../images/d4.png")}
              offset="20"
              alt=""
              className="absolute top-[34rem] left-[10rem] w-[15rem]"
            />
          </MouseParallax>
        </div>
        <div className="flex items-start flex-col justify-start flex-1 h-full pt-56 z-20">
          <motion.div
            animate={control}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-start max-w-full"
          >
            <input
              type="text"
              placeholder="Enter the keyword or URL"
              className="flex-[19] outline-none bg-[#020917] rounded-xl h-12 p-3"
            />
            <div className="flex flex-1 items-center rounded-xl ml-4 p-4 h-12 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] ">
              <img
                src={require("../images/search.png")}
                alt="search icon"
                className="w-6"
              />
            </div>
          </motion.div>
          <div className="flex justify-start mt-7 items-center w-full">
            <img
              src={require("../images/Path 318.png")}
              alt=""
              className="w-20"
            />
          </div>
          <div className="flex flex-col mt-5 text-4xl">
            <motion.span
              animate={control}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Search Music by
            </motion.span>
            <motion.span
              animate={control}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-bold"
            >
              Name or Direct URL
            </motion.span>
            <motion.span
              animate={control}
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm mt-3 text-[#4D586A]"
            >
              Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
              eget. Vestibulum ullamcorper <br /> volutpat varius.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
