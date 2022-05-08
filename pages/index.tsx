import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div className='overflow-hidden'>

      <motion.div id='main'  animate={{ opacity: [0, 1]}}
                    transition={{duration: 2}}
                    className={'h-screen'}>

        <div className='absolute bg-kayle bg-no-repeat bg-cover w-full h-screen justify-center content-center'>
          <video autoPlay muted loop id='wind' className='w-full h-screen mix-blend-screen opacity-100 contrast-150'>
            <source src='wind3.mp4' type='video/mp4'></source>
          </video>
        </div>

        <div className='text-erasion-chp italic text-7xl font-serif absolute flex w-full h-full justify-center items-center'>
            <p>ERASION</p>
        </div>

      </motion.div>

      <div>
        test
      </div>
      <div>
        test
      </div>
    </div>
    
  )
}

export default Home