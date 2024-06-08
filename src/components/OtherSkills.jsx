import React, {useState} from 'react'
import pic1 from '../assets/css.png'
import pic2 from '../assets/github.png'
import pic3 from '../assets/html.png'
import pic4 from '../assets/javascript.png'
import pic5 from '../assets/react.png'

const OtherSkills = () => {
    const slides = [
       pic1,pic2,pic3,pic4,pic5,
    ];


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage:'slides[0]'}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>        
    </div>
  )
}

export default OtherSkills
