import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, EarthCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ isMobile }) => {

  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* EarthCanvas for mobile */}
      {isMobile && (
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 z-0 w-[400px] h-[400px]'>
          <EarthCanvas />
        </div>
      )}

      {/* Hero content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[75px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ fontSize: isMobile ? '28px' : '36px' }}>
            <Typewriter
              words={['I develop 3D visuals', 'User interfaces', 'Web applications']}
              loop={true}
              delaySpeed={1000}
              cursor
            />
          </p>
        </div>
      </div>

      {/* ComputersCanvas for non-mobile */}
      {!isMobile && (
        <div className="absolute inset-0 z-20 cursor">
          <ComputersCanvas />
        </div>
      )}

      {/* Mobile-specific welcome text */}
      {isMobile && (
        <motion.div 
          className="absolute inset-0 flex top-[60%] justify-center items-center z-20"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <h1 className="text-4xl text-white font-bold p-4 text-center">
            Welcome to My Portfolio
          </h1>
        </motion.div>
      )}

      {/* Scroll down indicator */}
      <div className='absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center z-30'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#fff] flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-[#fff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
