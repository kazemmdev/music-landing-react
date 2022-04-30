import React from "react";

const Search = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-between h-[65rem] px-20 py-52 -mt-60 rounded-b-[4rem] bg-[#081730] z-30">
      <div className="flex-1">
        <img
          src={require("../images/backgraphics.png")}
          className="absolute top-[26rem] left-[-50rem]"
          alt=""
        />
        <img
          src={require("../images/d1.png")}
          alt=""
          className="absolute top-[25rem] left-[16rem] w-[16rem]"
        />
        <img
          src={require("../images/d2.png")}
          alt=""
          className="absolute top-[32rem] left-[18rem] w-[8rem]"
        />
        <img
          src={require("../images/d3.png")}
          alt=""
          className="absolute top-[32.2rem] left-[26rem] w-[7.6rem]"
        />
        <img
          src={require("../images/d4.png")}
          alt=""
          className="absolute top-[50rem] left-[16rem] w-[15rem]"
        />
      </div>
      <div className="flex items-start flex-col justify-start flex-1 h-full pt-56 z-20">
        <div className="flex justify-start w-full">
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
        </div>
        <div className="flex justify-start mt-7 items-center w-full">
          <img
            src={require("../images/Path 318.png")}
            alt=""
            className="w-20"
          />
        </div>
        <div className="flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
