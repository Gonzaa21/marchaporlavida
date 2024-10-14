import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
        },
    }


    return (
      <>
          <motion.div
                className='blur-lg bg-gradient-to-tr from-white h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none shadow-large'
                variants={variants}
                animate="default"
          />  
      </>
    );
}

export default Cursor;