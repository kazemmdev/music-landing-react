import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#081730] px-20 pt-10 pb-3">
      <img
        className="w-10 h-10"
        src={require("../images/logo.png")}
        alt="logo"
      />
      <div>
        <ul className="flex gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Performance</a>
          </li>
          <li>
            <a href="">Event Schedule</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <button className="border-2 rounded-lg px-6 py-2 border-[#212A4E] hover:bg-[#232A4E]">
          Sign up
        </button>
        <button className="border-2 rounded-lg px-6 py-2 border-[#212A4E] hover:bg-[#232A4E]">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;
