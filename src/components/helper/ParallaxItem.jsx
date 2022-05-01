import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ParallaxItem = ({ cx, cy, children }) => {
  const control = useAnimation();
  const offset = parseInt(children.props?.offset ?? 10);

  useEffect(() => {
    control.start({ x: cx / offset, y: cy / offset });
  }, [cx, cy]);

  return <motion.div animate={control}>{children}</motion.div>;
};

export default ParallaxItem;
