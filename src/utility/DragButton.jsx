import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useDragControls, useMotionValue, useAnimate, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const DragButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="place-content-center bg-neutral-950">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-between rounded w-full  bg-neutral-800 px-5 py-2 text-neutral-300 transition-colors hover:text-neutral-100 hover:bg-neutral-700 md:w-fit select-none"
      >
        Más información <FiArrowUpRight />
      </button>
      
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Żydowska Organizacja Bojowa en Varsovia
          </h2>
          <p>
            La ŻOB fue uno de los principales movimientos de <b>resistencia armada judía</b> fundado 
            por las tnuot Hashomer Hatzair, Habonim Dror, Bnei Akiva y Betar que dirigieron el 
            levantamiento del ghetto de Varsovia.
          </p>
          <p>
            La primera acción del ZOB fue durante las deportaciones de julio. Publicaron circulares 
            y las repartieron por las casas, pegaron murales en las calles e intentaron explicar lo 
            que sucedía.
          </p>
          <p>
            Durante las deportaciones, miembros del ZOB prendieron fuego a los edificios de los 
            judíos deportados. De esta forma, buscaban destruir las propiedades judías que podían 
            servir luego a las fuerzas nazis. También decidieron dar muerte al jefe de la policía 
            judía, Scharinsky.
          </p>
          <p>
            La Żydowska Organizacja Bojowa consigue establecer conexiones con otros grupos polacos
            de resistencia antifascista como Armia Krajowa (AK) la cual fue su principal fuente de 
            ingreso de armamento.
          </p>
          <p>
            El 18 de enero de 1943 era el día fijado por los nazis para la liquidación del gueto de 
            Varsovia. Esta vez, sin embargo, los nazis se encontraron con una fuerte resistencia armada.
            <b> Esta fue la primera vez que fueron enfrentados los planes alemanes</b>. Por primera vez, 
            la población judía vio que algo se podía hacer contra la voluntad y la fuerza de los alemanes. 
            En ese período, ya no se tomaba en cuenta al Judenrat ni se escuchaban sus órdenes; la ŻOB 
            reinaba en el gueto plenamente. Era la única fuerza y el único poder que tenía autoridad y 
            a quien la población escuchaba.
          </p>
          <p>
            A partir de ahí, los enfrentamientos tuvieron lugar de noche. Durante el día, el gueto 
            permanecía en silencio, y sus combatientes, escondidos en los búnkeres. El 8 de mayo, la 
            comandancia de la ŻOB, ubicada en el búnker, fue rodeada. Luego de horas de enfrentamiento, 
            los alemanes arrojaron bombas de gas hacia el búnker. De este modo, fallecieron la mayoría 
            de los últimos luchadores. Entre ellos, el comandante Mordejai Anilevich. 
          </p>
          <p>
            Luego de tres semanas de iniciado el levantamiento, del ghetto quedó totalmente incendiado 
            y envuelto en una atroz situación de hambre y sed. Los últimos combatientes con vida empezaron 
            a buscar formas de salir del gueto. Algunos lograron escapar por medio de los canales cloacales. 
            Algunos de los que sobrevivieron fueron a luchar con los partisanos a los bosques, mientras 
            que otros se unieron a la lucha armada polaca.
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12 scrollbar-hide">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DragButton