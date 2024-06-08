import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Daniel from '../assets/Daniel.png';
import { ReactTyped } from "react-typed";
import pdf from '../assets/Daniel_Igbokwe_Resume.pdf';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      name='home'
      ref={ref}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className='w-full h-full bg-[white] py-16 px-4'
    >
      {/*Container*/}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 pt-4' src={Daniel} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-black-600'>Hi, My name is </p>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#B0B0B0]'>Daniel Igbokwe</h1>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#B0B0B0]'>I am a/an </h2>
          <ReactTyped className='text-4xl sm:text-5xl font-bold text-[#1C1C1C]'
            strings={['AI Engineer', 'Software Engineer']} typeSpeed={120} backSpeed={140} loop />

          <p className='text-[#B0B0B0] py-4 max-w-[700px]'>I specialize in developing tailored AI solutions, leveraging TensorFlow and Azure AI to optimize user experiences and operational efficiencies. I am focused on building end-to-end machine learning applications.

</p>
          <div>
            <a href="/" download={pdf}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='text-black group border-2 border-black rounded-2xl px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white hover:border-gray-200'
              >
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
                Download CV
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
