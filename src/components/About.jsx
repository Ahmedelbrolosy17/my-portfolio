import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServicCard = React.memo(({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', .3 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={
            {
              max: 30,
            scale: 1,
            speed: 450
          }
          }
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
            loading='lazy'
            />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
})

ServicCard.displayName = "serviceCard";

const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', "", 0.7, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-2'
      >
        a Front-end developer experienced in building user-friendly websites and applications. Skilled in HTML, CSS,
        and JavaScript, with expertise in React JS, Bootstrap, and Tailwind. passionate about web development
        trends and modern technologies that change the market.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (  
          <ServicCard key={service.title} index=
            {index} {...service}
          />  
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");