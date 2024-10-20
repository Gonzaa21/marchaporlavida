import React from "react";
import { Chip } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';

export default function TipScroll() {
  return (
    <motion.div 
      initial={{y: 0, opacity: 0}}
      animate={{y: 150, opacity: 1}} 
      transition={{delay: 6, duration: .5, type: 'spring'}}
      >
        <Chip
          variant="bordered"
          color="default"
          startContent={<IoMdArrowDropdown size={20}/>}
          className=" text-gray-500 shadow-lg shadow-gray-300 border-2 border-gray-400/50 animate-bounce"
          >
            
          Sigue abajo!
        </Chip>
    </motion.div>
  );
}