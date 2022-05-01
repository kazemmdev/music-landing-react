import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuButton } from "./helper/MenuButton";
import MenuItems from "./helper/MenuItems";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#081730] px-20 py-10">
      <motion.div
        className="flex justify-between items-center max-w-7xl m-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-10 h-10"
          src={require("../images/logo.png")}
          alt="logo"
        />
        <div className="lg:hidden z-[999]">
          <MenuButton
            isOpen={open}
            onClick={() => setOpen(!open)}
            color="#fff"
          />
        </div>
        <MenuItems
          isColumn={true}
          style={{ display: open ? "flex" : "none" }}
          className="absolute flex flex-col items-center h-screen inset-0 w-full z-[100] bg-[#081730c5] backdrop-blur-md"
        />
        <MenuItems className="hidden lg:flex justify-between items-center gap-14" />
      </motion.div>
    </div>
  );
};

export default Header;
