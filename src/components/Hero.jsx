import React from "react";
import { motion } from "framer-motion";
import DownloadAds from "./helper/DownloadAds";
import MouseParallax from "./helper/MouseParallax";

const Hero = () => {
  return (
    <div className="relative w-full h-full px-20 bg-[#081730] overflow-hidden rounded-b-[4rem] z-50">
      <div className="relative h-[60rem] lg:h-[36rem] flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col flex-[0] lg:flex-[1] items-start justify-center h-full w-full text-5xl mt-36 lg:mt-0 z-10">
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="pb-3"
          >
            Experience The
          </motion.h2>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-bold pb-4"
          >
            Best Quality Music
          </motion.h2>
          <motion.span
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#525D6E] text-sm max-w-md"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </motion.span>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-base mb-10">
              Download now on IOS and Android
            </span>
            <DownloadAds />
          </motion.div>
        </div>
        <div className="relative h-full w-full lg:flex-[1]">
          <MouseParallax>
            <motion.img
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={require("../images/backgraphics.png")}
              alt="bg"
              className="absolute top-[5rem] lg:right-[-30rem] right-[-20rem]"
              offset="40"
            />
            <motion.img
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src={require("../images/p1.png")}
              alt="bg"
              className="absolute lg:top-1 top-[3rem] lg:right-[3rem] right-[5rem] lg:h-[34rem] h-[26rem]"
              offset="30"
            />
            <motion.img
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={require("../images/p2.png")}
              alt="bg"
              className="absolute lg:top-[21rem] top-[19rem] lg:right-[8rem] right-[8.5rem] lg:h-[7rem] h-[5.1rem]"
              offset="22"
            />
            <motion.img
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={require("../images/p3.png")}
              alt="bg"
              className="absolute lg:top-[27.5rem] top-[24.2rem] lg:right-[15rem] right-[14.3rem] lg:h-[4.5rem] h-[3rem]"
              offset="22"
            />
            <motion.img
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={require("../images/p4.png")}
              alt="bg"
              className="absolute lg:top-[25.2rem] top-[22rem] lg:right-[14rem] right-[13rem] lg:h-[9rem] h-[7rem]"
              offset="16"
            />
          </MouseParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
