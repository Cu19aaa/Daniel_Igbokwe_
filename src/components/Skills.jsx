import React from 'react'

import GitHub from '../assets/github.png';
import Oracle from '../assets/Oracle.png';
import Tensor from '../assets/TensorFlow.png';
import Azure from '../assets/Azure.png';
import Google from '../assets/Googlecloud.png';
import Computer from '../assets/Computer Vison.png';
import Neural from '../assets/NeuralNetworks.png';
import Natural from '../assets/NLP.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[white] text-[#B0B0B0]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 text-[#B0B0B0] border-black'>Experience</p>
            <p className='py-4 '>These are the technologies i have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto  ' src={Tensor} alt="HTML icon" />
                <p className='my-4 text-black'>TensorFlow</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Azure} alt="HTML icon" />
                <p className='my-4 text-black'>Azure AI</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Google} alt="HTML icon" />
                <p className='my-4 text-black'>Google Cloud</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Computer} alt="HTML icon" />
                <p className='my-4 text-black'>Computer Vision</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Neural} alt="HTML icon" />
                <p className='my-4 text-black'>Neural Networks</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-2xl'>
                <img className='w-20 mx-auto ' src={Natural} alt="HTML icon" />
                <p className='my-4 text-black'>Natural Language Processing</p>
            </div>
        </div>


      </div>
      
    </div>

    
  )
}

export default Skills
