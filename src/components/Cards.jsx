import TextScroll from '../utility/TextScroll.jsx'
import { FiBarChart, FiBell } from "react-icons/fi";
import { IoPlayBackOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../utility/useWindowSize.jsx";
import { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <div className="bg-black w-full">
      <section className="m-5">
        <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden p-1 bg-gradient-to-tr from-neutral-900 via-neutral-600 to-neutral-800">
          {items.map((item) => {
            return (
              <Panel
                key={item.id}
                open={open}
                setOpen={setOpen}
                id={item.id}
                Icon={item.Icon}
                title={item.title}
                imgSrc={item.imgSrc}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <TextScroll />
    </div>
  );
};

export default Cards;

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-black hover:bg-neutral-900 transition-colors p-3 border-r-[1px] border-b-[1px] lg:border-b-[0px] border-neutral-600 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-thin rotate-180 text-blue-400 tracking-wider"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light text-blue-400">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-[#005EB8] text-black grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-black group-hover:bg-slate-900 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-600 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-white flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Custom Variants

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

// Data JSON

const items = [
    {
      id: 1,
      title: "Los jóvenes",
      Icon: IoPlayBackOutline,
      imgSrc:
        "https://i.ibb.co/BwBPHZg/Sin-t-tulo-1.jpg",
      description:
        "Los jóvenes de las tnuot, de entre 15 y 25 años, resistieron al nazismo buscando alternativas al sometimiento. A pesar de las limitaciones impuestas, lucharon por marcar su propio destino e intentaron cambiar una sociedad dominada por el régimen totalitario",
    },
    {
      id: 2,
      title: '"Final del tunel..."',
      Icon: MdOutlineLightMode,
      imgSrc:
        "https://i.ibb.co/Qrw0ZMx/Sin-t-tulo-1.jpg",
      description:
        "Tras la Segunda Guerra Mundial, las tnuot noar continuaron activas, adaptándose a nuevas circunstancias. A lo largo de la guerra y después de ella, cambiaron su forma de operar, enfrentándose a desafíos inesperados, pero mantuvieron y siguen manteniendo su esencia hasta la actualidad en todo el mundo.",
    },
    {
      id: 3,
      title: "Mandato británico",
      Icon: FaRegFlag,
      imgSrc:
        "https://i.ibb.co/0nJhFKq/Sin-t-tulo-1.jpg",
      description:
        "Los refugiados judíos buscaban rehacer sus vidas, crearon kibutzim, centros donde los sobrevivientes encontraban refugio y comida. Además, fundaron escuelas y espacios para jóvenes que planeaban emigrar a Israel. Durante el mandato británico (1934-1948), la Hapalá (inmigración ilegal), permitió la llegada de judíos de todo el mundo a Israel.",
    },
    {
      id: 4,
      title: "Actualidad",
      Icon: TfiWorld,
      imgSrc:
        "https://i.ibb.co/16c4W0Q/Sin-t-tulo-1.jpg",
      description:
        "Las tnuot noar siguen siendo relevantes hoy en día, especialmente en tiempos de crisis para la comunidad judía e Israel. Tras el ataque del “7 de Octubre”, estos movimientos jugaron un papel clave en la movilización de apoyo comunitario, promoviendo la solidaridad y ayudando a quienes fueron afectados por el conflicto.",
    },
  ];