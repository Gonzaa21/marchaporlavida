import TipScroll from '../utility/TipScroll.jsx'
import ButtonModal from '../utility/ButtonModal.jsx'
import Title from '../utility/Title.jsx'
import Parallax from './Parallax.jsx'
import Button from './Button.jsx'
import Cards from './Cards.jsx'
import Carousel from './Carousel.jsx'
import video1 from '../assets/videos/Video1.mp4';
import data from '../data.json'
import { motion } from 'framer-motion';
import { useState } from 'react';

const imgs1 = [
  "https://i0.wp.com/www.enlacejudio.com/wp-content/uploads/2020/06/abanderados-hh.jpg?w=960&ssl=1",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PikiWiki_Israel_4143_Gan-Shmuel_sg9-_31.jpg/299px-PikiWiki_Israel_4143_Gan-Shmuel_sg9-_31.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/PikiWiki_Israel_4177_Gan-Shmuel_sg29-_31.jpg/305px-PikiWiki_Israel_4177_Gan-Shmuel_sg29-_31.jpg",
  "https://i0.wp.com/eldiariojudio.com/wp-content/uploads/2013/09/kvutza-hh-2.jpg?w=600&ssl=1",
  "https://s3-us-west-2.amazonaws.com/lglformsimg/Bqf0jhe2sFU/BW-at-Mosh.jpg-BW+at+Mosh.jpg",
  "https://i0.wp.com/www.enlacejudio.com/wp-content/uploads/2013/03/san176.jpg?w=314&ssl=1",
  "http://memij.com.br/images/iconografia/0114hashomer-sp-br.jpg",
];

const imgs2 = [
  "https://i0.wp.com/www.enlacejudio.com/wp-content/uploads/2014/02/Captura-de-pantalla-2014-02-09-a-las-08.36.04.png?w=356&ssl=1",
  "https://www.yadvashem.org/sites/default/files/7b.jpg",
  "https://www.yadvashem.org/sites/default/files/75GO5_.jpg",
  "https://www.yadvashem.org/sites/default/files/Lodz%2C%20Poland%2C%20The%20Lodz%20Ghetto%20Symphony%20Orchestra%2C.JPG",
  "https://encyclopedia.ushmm.org/images/large/59e7938c-a6bc-44f2-a1b1-a0068141f6d2.jpg",
  "https://encyclopedia.ushmm.org/images/large/0376e004-bd7d-4212-a8e1-8a795817016b.jpg"
];

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
      <Carousel images={imgs1}/>
      <ButtonModal />
      <Button />
      <Title />
      <Carousel images={imgs2}/>
      <Parallax />
      <Cards />
    </>
  )
}

export default Component;