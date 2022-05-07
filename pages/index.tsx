import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <motion.div   animate={{ opacity: [0, 1]}}
                  className={'bg-kayle contrast-110 brightness-90 bg-no-repeat bg-cover h-full w-full absolute overflow-hidden'}>
      <div>
        <video autoPlay muted loop id='wind' className='flex-initial w-full h-full absolute mix-blend-screen opacity-60'>
          <source src='wind.mp4' type='video/mp4'></source>
        </video>
      </div>
      <div className='w-full h-full text-center text-erasion-chp flex-col flex flex-1 justify-center content-center'>
        <h1 className='text-8xl font-serif italic'>ERASION</h1>
      </div>
      <div className='flex bg-erasion-drk1 w-full h-full'>
        test
      </div>
      <div className='flex bg-erasion-drk2 w-full h-full'>
        test
      </div>
    </motion.div>
  )
}

export default Home