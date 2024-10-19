import React, { useCallback } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import { styles } from "../styles";
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';
import './works.css'


const ProjectCard = React.memo(({project, index}) =>{


  const handleLiveLink = useCallback((link) => {
    window.open(link, "_blank");
  }, []);
  const handleSourceLink = useCallback((link) => {
    window.open(link, "_blank");
  }, []);


  return(
    <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #fff'}} 
    iconStyle={{background: '#050816'}}
      icon={
        <div
          className='flex justify-center items-center w-full h-full'
        >
          <img src={project.icon} alt={project.name}
          className=" w-[full] h-[full] object-contain"
          />
        </div>
      }
    >
      <div className="flex justify-center">
        <div className="bg-[#1d1836] p-5 rounded-2xl ">
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={()=>{
            handleLiveLink(project.live_link)
          }}
          >
          <img src={project.image} alt={project.name}
           className="w-full h-full object-cover rounded-2xl"/>
           <div
             
            className="absolute flex justify-start items-end mt-1 mr-1 flex-col inset-0 card-img_hover"
            >
            <div
            onClick={()=>{
              handleSourceLink(project.source_code_link)
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
           </div>
        </div>

        <div
          className="mt-5 "
        >
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secodary text-[14px]">{project.description}</p>
        </div>

        <div
          className="mt-4 flex flex-wrap gap-2"
        >
           
          {project.tags.map((tag)=>(
            <p
             className={`text-[14px] ${tag.color}`}
             key={tag.name}
             >
              #{tag.name}
             </p>
          ))}
        </div>
        </div>
      </div>
    </VerticalTimelineElement>
    
  )
});

ProjectCard.displayName = "ProjectCard";

const Works = () => {
  return (
    <>
       <motion.div
        variants={textVariant()}
      >
        <p
         className={styles.sectionSubText}
         >
          My work
          </p>
        <h2
         className={styles.sectionHeadText}
         >
          Projects.
          </h2>
      </motion.div>
      <div
      className="w-full flex"
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div 
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline 
          
        >
        {projects.map((project, index)=>(
          <ProjectCard 
          key={`project-${index}`}
          project={project}
          index={index}
          />
        ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")