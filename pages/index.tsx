import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div id='main' className='w-full h-full overflow-scroll'>

      <motion.div animate={{ opacity: [0, 1] }}
                  transition={{duration: 2}}
                  className={'h-screen overflow-hidden'}>

        <div className='z-50 italic text-8xl font-serif absolute flex w-full h-full justify-center items-center'>
            <p>ERASION</p>
        </div>

        <div className='absolute bg-kayle brightness-110 contrast-105 bg-no-repeat bg-cover w-full h-screen justify-center content-center'>
          <video autoPlay muted loop id='wind' className='w-full h-screen mix-blend-screen opacity-70 contrast-150 brightness-200'>
            <source src='wind3.mp4' type='video/mp4'></source>
          </video>
        </div>

     

      </motion.div>
      
      <div className='flex-col justify-center w-full h-screen snap-start mt-10'>
        <div className='pl-52'>
          <p className='text-8xl font-serif font-bold ita mt-6'>TEAMS</p>
        </div>

        <div>
          <div className='flex justify-start pl-52 contrast-100 brightness-105'>
            <div className='flex-col w-96'>
              <p className='text-6xl font-serif ita mt-6'>LEAGUE OF LEGENDS</p>
            </div>

            <div className='h-full w-full -mr-144'>
              <Image alt='team-lol' src='/edg.jpg' width={'1024'} height={'576'}></Image>
            </div>
          </div>
        </div>

      </div>

      <div className='flex justify-center w-full h-screen bg-erasion-drk3 snap-start'>
          <p className='text-6xl font-serif ita mt-6'>BUSINESS</p>
      </div>

    </div>
    
  )
}

export default Home