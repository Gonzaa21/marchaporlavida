import one from '../assets/videos/poster1.mp4'
import two from '../assets/videos/poster2.mp4'
import { motion } from "framer-motion";

function Image() {

  return (
    <>
      <div className="flex wrap justify-center gap-10 w-full lg:w-2/4 pb-44">
        <motion.div
        className="flex flex-wrap gap-y-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 3, delay: .5}}
        >
          <div>
            <video autoPlay loop src={one}/>
          </div>
          <div>
            <video autoPlay loop src={two}/>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Image