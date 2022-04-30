import React from "react";
import DownloadAds from "./helper/DownloadAds";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-between px-20 w-full h-[42rem] bg-[#081730] rounded-b-[4rem] z-50">
      <div className="flex flex-col items-start justify-center h-full text-5xl z-10">
        <h2 className="pb-3">Experience The</h2>
        <h2 className="font-bold pb-4">Best Quality Music</h2>
        <span className="text-[#525D6E] text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>
        <div>
          <span className="text-base pb-4">
            Download now on IOS and Android
          </span>
          <DownloadAds />
        </div>
      </div>
      <div>
        <img
          src={require("../images/backgraphics.png")}
          alt="bg"
          className="absolute top-[5rem] right-[-30rem]"
        />
        <img
          src={require("../images/p1.png")}
          alt="bg"
          className="absolute top-1 right-52 h-[34rem]"
        />
        <img
          src={require("../images/p2.png")}
          alt="bg"
          className="absolute top-[21rem] right-[17rem] h-[7rem]"
        />
        <img
          src={require("../images/p3.png")}
          alt="bg"
          className="absolute top-[27.5rem] right-[24.9rem] h-[4.5rem]"
        />
        <img
          src={require("../images/p4.png")}
          alt="bg"
          className="absolute top-[25.2rem] right-[23.2rem] h-[9rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
