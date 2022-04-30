import React from "react";
import Feature from "./helper/Feature";

const Experience = () => {
  return (
    <div className="relative flex flex-col items-center justify-start bg-[#020917] h-[60rem] px-20 pt-72 -mt-40 rounded-b-[4rem] z-40">
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <h3>An Amazing App Can Change Your Daily Life</h3>
        <span className="font-bold">Music Experience</span>
      </div>
      <div className="flex items-center justify-around mt-24 w-full">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
};

export default Experience;
