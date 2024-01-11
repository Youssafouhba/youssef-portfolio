import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer/>,
          <FaJava/>,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />],
      },
    ],
  },
 /* {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },*/
  {
    title: 'experience',
    info: [
      {
        title: 'Internship In Cyber Security - ONRST',
        stage: '2022 - 2023',
      },
     /* {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },*/
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ENSA-MARACKECH',
        stage: '2024',
      },
      {
        title: 'Computer Science Student - ENSA-MARACKECH',
        stage: '2023',
      },
      {
        title: 'Certified Front-end Developper - Meta',
        stage: '2022-2023',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import CountUp from "react-countup";

//framer motion
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants';


const About = () => {

  const handleButtonClick = () => {
    window.open("https://github.com/Youssafouhba/youssef-portfolio/blob/main/pages/about/cv.pdf", '_blank');
  };

  const [index,setindex] = useState(0);
  console.log(index);
  return(
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles/>
      {/** avatar img */}
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center 
      xl:flex-row gap-x-6'>
        {/** text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
           variants={fadeIn('right', 0.2)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className='h2'>
            Captinvating <span className='text-accent'> stories</span> birth magnificient design.
          </motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          <button
           onClick={handleButtonClick}
           className='border-b-4'
           > Go to My Resume</button>
         
          </motion.p>
          {/* counters */}
          <motion.div 
           variants={fadeIn('up', 0.6)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
                {/** experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={3} duration={7}/>+
                  </div>
                  <div className='text-xs uppercase trancking-[1px] leading-[1.4]
                    max-w-[100px] '>
                    Years of experience
                  </div>
                </div>
                {/*clients*/}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={10} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase trancking-[1px] leading-[1.4] max-w-[100px] '>
                    Satisfied clients
                  </div>
                </div>
                {/*Projetc*/}
                <div className='relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0 '>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={30} duration={5}/>+
                  </div>
                  <div className='text-xs uppercase trancking-[1px] leading-[1.4]
                        max-w-[100px] '>
                    Finished Projects
                  </div>
                </div>
                {/* awards */}
               <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5}/>+
                </div>
                <div className='text-xs uppercase trancking-[1px] leading-[1.4]
                max-w-[100px] '>
                  Winning awards
                </div>
              </div>
          </div>
        </motion.div>
        </div>
        {/** infos */}
        <motion.div 
         variants={fadeIn('left', 0.4)}
         initial='hidden'
         animate='show'
         exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemindex) => {
            return (
            <div 
            key={itemindex} 
            className={` ${index === itemindex && 'text-accent after:w-[100%]- after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg
            relative after:w-8 after:h-[2px] after:bg-white
            after:absolute after:bottom-1 after:left-0`}
            onClick={()=> setindex(itemindex)}>
              {/** title */}
              {item.title}
              </div>
            );
          })}
        </div>
        <div className=' py-2 xl:py-6 flex flex-col gap-y-2
        xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemindex) => {
           return(
            <div key={itemindex}
            className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
            items-center text-white/60'>
              {/** title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>~</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                   {/* icons */}
                   {item.icons?.map((icon, itemindex) => {
                    return<div className='text-2xl'>{icon}</div>
                   })}
              </div>
            </div>
           );
          })}
        </div>
        </motion.div>
      </div>
     </div>
)};

export default About;
