import Component from '../components/Component.jsx'
import Cursor from '../utility/Cursor.jsx'
import { motion } from 'framer-motion';
import { useState } from 'react';

function Circle() {
    const [click, setClick] = useState(true);
    return (
    <>
        {click && <Cursor />}
        <motion.div 
            style={{overflowY: click ? "hidden" : "initial", background: click ? "black":"white"}}
            className=" bg-black h-screen w-full flex flex-wrap justify-center items-center "
            >
            <motion.div 
                onClick={()=> setClick()}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: .8 }}
                style={{ cursor: click ? "pointer" : "default"}}
                className="bg-white w-2 h-2 2xl:w-3 2xl:h-3 rounded-full shadow-inner shadow-slate-100 brightness-100"
            />
            {!click && <Component />}
        </motion.div>
    </>

    )
}

export default Circle