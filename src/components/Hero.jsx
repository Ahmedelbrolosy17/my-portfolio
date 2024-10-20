import React, {useEffect, useState}from 'react';
import {motion} from 'framer-motion';
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
      <div className={`${styles.paddingX} absolute inset-0 top-[75px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
    
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, i&apos;m <span className='text-[#915eff]'>Ahmed</span>
        </h1>
        <p className={` ${styles.heroSubText} mt-2 text-whtie-100`} style={{fontSize: '36px'}}>
          {/* i develope 3d visuals, user <br className='sm:block hidden'/>interfaces and web applications */}
          <Typewriter
          words = {['i develope 3d visuals', 'user interfaces', 'web applications']}
          loop= {true}
          delaySpeed={1000}
          cursor
          />
        </p>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}
        <div className='absolute xs:bottom bottom-12 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondart flex justify-center items-start p-2'>
              <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero;