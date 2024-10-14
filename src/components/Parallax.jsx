import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DragButton from '../utility/DragButton.jsx'
import ToolTip from '../utility/ToolTip.jsx'

const Parallax = () => {
  return (
    <div className="bg-black w-full">
      <TextParallaxContent
        imgUrl="https://www.laizquierdadiario.com/IMG/jpg/soldados1raciabatallonkilinski_del_ak.jpg"
        subheading="Resistencia Armada"
        heading="Levantamiento de Varsovia"
      >
        <Content />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[200vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-900/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  return (
    <motion.div
      style={{y, opacity} }
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      Las Tnuot en el levantamiento de Varsovia
      <ToolTip />
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-300 md:text-2xl">
        La ŻOB fue una organización de resistencia armada judía que lideró el levantamiento 
        del gueto de Varsovia. Fundada por grupos juveniles sionistas, la ŻOB realizó su primera 
        acción durante las deportaciones de julio, distribuyendo circulares y destruyendo propiedades 
        que podrían ser útiles a los nazis. Se alió con la resistencia polaca para obtener armas. 
      </p>
      <p className="mb-8 text-xl text-neutral-400 md:text-2xl">
        El 18 de enero de 1943, los nazis 
        enfrentaron una fuerte resistencia en el gueto. Tras semanas de lucha, muchos combatientes 
        murieron en enfrentamientos o al ser rodeados por los alemanes. Algunos sobrevivientes escaparon 
        y se unieron a los partisanos o a la resistencia polaca.
      </p>
      <DragButton />
    </div>
  </div>
);

export default Parallax