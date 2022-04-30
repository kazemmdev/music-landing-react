import React from "react";

const Feature = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center flex-col relative text-center mx-12">
      <div className="bg-[#081730] rounded-2xl p-4">
        <img
          src={require(`../../images/${icon}.png`)}
          alt="icon"
          className="w-12"
        />
      </div>
      <h3 className="mt-5">{title}</h3>
      <span className="text-[#707070] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <a className="text-[#E600FF] underline mt-12" href="#">
        Learn more
      </a>
    </div>
  );
};

export default Feature;
