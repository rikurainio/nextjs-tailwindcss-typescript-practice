import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div id='main' className='w-full h-full'>

      <motion.div animate={{ opacity: [0, 1]}}
                    transition={{duration: 2}}
                    className={'h-screen'}>

        <div className='absolute bg-kayle brightness-110 contrast-105 bg-no-repeat bg-cover w-full h-screen justify-center content-center'>
          <video autoPlay muted loop id='wind' className='w-full h-screen mix-blend-screen opacity-100 contrast-150 brightness-200'>
            <source src='wind3.mp4' type='video/mp4'></source>
          </video>
        </div>

        <div className='italic text-7xl font-serif absolute flex w-full h-full justify-center items-center'>
            <p>ERASION</p>
        </div>

      </motion.div>
      
      <div className='flex justify-center w-full h-screen'>
          <p className='text-6xl font-serif ita mt-6'>TEAMS</p>
      </div>
      <div className='flex justify-center w-full h-screen bg-erasion-drk2'>
          <p className='text-6xl font-serif ita mt-6'>BUSINESS</p>
      </div>

    </div>
    
  )
}

export default Home