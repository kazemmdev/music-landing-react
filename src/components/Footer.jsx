import React from "react";
import YoutubSvg from "../images/youtube.svg";
import TwitterSvg from "../images/twitter.svg";
import LinkedinSvg from "../images/linkedin.svg";
import FacebookSvg from "../images/facebook.svg";

const Footer = () => {
  return (
    <div className=" footer flex flex-col items-center justify-start p-20 bg-[#081730] h-[30rem] pt-[16rem] mt-[-10rem] relative -z-10">
      <div className="flex w-[100%] justify-center mt-14 gap-10">
        <div className="rounded-full border-2 border-whit p-2">
          <img src={YoutubSvg} alt="" />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <img src={TwitterSvg} alt="" />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <img src={LinkedinSvg} alt="" />
        </div>
        <div className="rounded-full border-2 border-whit p-2">
          <img src={FacebookSvg} alt="" />
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </span>
    </div>
  );
};

export default Footer;
