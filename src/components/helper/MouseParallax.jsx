import { motion } from "framer-motion";
import { useState } from "react";
import ParallaxItem from "./ParallaxItem";

const MouseParallax = ({ children }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveHandle = ({ clientX, clientY }) => {
    setX(clientX - window.innerWidth / 2);
    setY(clientY - window.innerHeight / 2);
  };
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      onMouseMove={moveHandle}
    >
      {children.length > 0 &&
        children.map((item, index) => (
          <ParallaxItem key={index} cx={x} cy={y}>
            {item}
          </ParallaxItem>
        ))}
    </motion.div>
  );
};

export default MouseParallax;
