"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Card = ({ title, des, id, children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.1] group/canvas-card flex items-center overflow-hidden bg-black-200 rounded-3xl justify-center max-w-sm w-full mx-auto p-4 relative h-[38rem]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          <Button className={`w-full`}>Phase {id}</Button>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-4 text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 dark:text-white text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-base text-blue-100">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
