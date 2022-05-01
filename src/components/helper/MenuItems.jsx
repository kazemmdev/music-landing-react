import React from "react";

const MenuItems = ({ isColumn, ...props }) => {
  return (
    <div {...props}>
      <div
        className={
          isColumn ? "flex flex-col gap-14 text-center my-auto" : "flex gap-10"
        }
      >
        <a className="hover:opacity-80" href="">
          Home
        </a>
        <a className="hover:opacity-80" href="">
          Performance
        </a>
        <a className="hover:opacity-80" href="">
          Search
        </a>
        <a className="hover:opacity-80" href="">
          Download
        </a>
      </div>
      <div className={isColumn ? "flex gap-3 mb-10" : "flex gap-3"}>
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

export default MenuItems;
