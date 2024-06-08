import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      name='about'
      ref={ref}
      initial={{ x: '100vw', opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className='w-full h-full pt-8 pb-8 bg-[#F1F1F1] text-[#B0B0B0]'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <motion.div
            className='sm:text-right pb-8 pl-4'
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.2 }}
          >
            <p className='text-4xl font-bold inline border-b-4 border-black'>About Me</p>
          </motion.div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <motion.div
            className='sm:text-right text-4xl font-bold'
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.4 }}
          >
            <p>Hi. Im Daniel and welcome to my website portfolio.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={controls}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, delay: 0.6 }}
          >
            <p>Welcome, I am a graduate from idaho State Univeristy where I completed both my Bachelors and Masters of Science in Computer Science.
              During my time at the university, I gained valuable experience working at the Computational Creativity and Intelligence Lab, and 
              later at the Center for Advanced Energy Studies. My journey in machine learning development started during my undergraduate studies
              at Idaho State University, where I was introduced to different machine learning algorithms, data processing, training and evaluating 
              ML models, and deploying pipelines. From my internships, I gained experience developing real-time ML solutions. I have since expanded
              my knowledge to include machine learning technologies such as TensorFlow, Google cloud, Hugging Face and Azure AI. With my extensive
              learning and practical experience, I consider myself a well-educated Machine Learning Engineer currently looking for a role where I can 
              learn, grow, contribute, and thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
