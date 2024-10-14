import React from "react";
import { Chip } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from 'framer-motion';

export default function TipScroll() {
  return (
    <motion.div 
      animate={{y: 300}} 
      initial={{y: 1200}} 
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