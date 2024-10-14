import Image from './Image.jsx'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Button = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center px-4 bg-black w-screen">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const [click, setClick] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.9 }}
        ref={btnRef}
        className="relative w-full max-w-xs overflow-hidden rounded-lg bg-neutral-950 px-4 py-3 text-lg font-medium text-white border border-neutral-50/5 shadow-lg shadow-neutral-800 "
        onClick={()=> setClick()}
        style={{ display: !click ? "none":"initial" }}
      >
        <span className="pointer-events-none relative z-10 mix-blend-difference">
          La juventud ante la adversidad
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
        />

      </motion.button>
      {!click && <Image />}
    </>
  );
};

export default Button;