"use client";

import { motion } from "framer-motion";
import CloseSVG from "../svg-icons/close-svg";
import HamburgerSVG from "../svg-icons/hamburger-svg";

interface AnimatedMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

export default function AnimatedMenuIcon({
  isOpen,
  onClick
}: AnimatedMenuIconProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-md p-2 hover:bg-muted/20"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.div
        key={isOpen ? "close" : "menu"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center size-6"
      >
        {isOpen ? <CloseSVG className="stroke-white-3"/> : <HamburgerSVG className="stroke-white-3" />}
      </motion.div>
    </motion.button>
  );
}