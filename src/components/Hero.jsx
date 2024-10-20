import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-indigo-950 animate-pulse"></div>
      )}

      {!isMobile && (
        <div className='absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
      )}

      <div className={`${styles.paddingX} absolute inset-0 top-[75px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ fontSize: '36px' }}>
            <Typewriter
              words={['I develop 3D visuals', 'User interfaces', 'Web applications']}
              loop={true}
              delaySpeed={1000}
              cursor
            />
          </p>
        </div>
      </div>
      
      {!isMobile && <ComputersCanvas />}
      
      {isMobile && (
        <motion.div 
        className="absolute inset-0 flex top-[150px] justify-center items-center"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 2.5,
          ease: "easeInOut"
        }}
      >
        <h1 className="text-4xl text-white font-bold p-4">Welcome to My Portfolio</h1>
      </motion.div>
      
      
      )}
      
      <div className='absolute xs:bottom bottom-8 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#fff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
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
