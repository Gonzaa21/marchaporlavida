import TipScroll from '../utility/TipScroll.jsx'
import Parallax from './Parallax.jsx'
import Button from './Button.jsx'
import Cards from './Cards.jsx'
import ButtonModal from '../utility/ButtonModal.jsx'
import Carousel from './Carousel.jsx'
import video1 from '../assets/videos/Video1.mp4';
import data from '../data.json'
import { motion } from 'framer-motion';
import { useState } from 'react';

function Component() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center flex-col h-full">
        {
          data.map((data)=>(
            <motion.h1
            className='font-abrilFatface italic text-3xl 2xl:text-5xl text-black flex justify-center content-center text-center'
            initial={{opacity: 0}}
            animate={{opacity: [0, .1, .2, .3, .4, .5, .6, .8]}}
            transition={{duration: 2.6, delay: 1.5}}
            >

            {data.title}
          </motion.h1>
          ))
        }
        {
          data.map((data)=>(
            <motion.p
            className='font-sans text-xl 2xl:text-3xl text-gray-700 flex items-center justify-center'
            initial={{opacity: 0}}
            animate={{opacity: [0, .1, .2, .3, .4, .5, .6, .7], y: 70}}
            transition={{duration: 2.6, delay: 2.7}}
            >

            {data.subtitle}
          </motion.p>
          ))
        }
        <TipScroll />
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-t from-black from-70% w-screen h-full relative overflow-hidden">
        <h1 className="font-tanach text-neutral-100/20 font-bold tracking-wide text-[100px] xl:text-[300px] text-center select-none animate-pulse">Tnuot Noar</h1>
        <div>
          <motion.video muted loop autoPlay
            style={{filter: isHovered ? "blur(5px)" : "none"}}
            src={video1}
            className='transition duration-300 w-7/12 mx-auto rounded-2xl border-2 border-neutral-600 shadow-lg shadow-neutral-700'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          
          {
            data.map((data)=>(
              <div className="relative bottom-1/2 lg:bottom-1/2 mx-auto text-center text-white lg:max-w-screen-sm max-w-sm text-xs w-full">
                <motion.h2
                  initial={{opacity: 0}}
                  animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 20 : 0}}
                  transition={{duration: 0.3}}
                  className='font-mono lg:text-xl underline decoration-yellow-400 underline-offset-4'
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  >

                  {data.subhead}
                </motion.h2>
                
                <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 20 : 0}}
                  transition={{duration: 0.3}}
                  className='font-montserrat lg:text-lg'
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  >

                  {data.text}
                </motion.p>
              </div>
            ))
          }
        </div>
      </div>
      <Carousel />
      <ButtonModal />
      <Button />
      <Parallax />
      <Cards />
    </>
  )
}

export default Component;