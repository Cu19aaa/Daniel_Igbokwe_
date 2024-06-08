import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#E5E7EB] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/7783e2dd-0cc0-4c3d-915f-a774de6ae892" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black py-4'>Submit the form below</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='rounded-lg text-black border-2 border-black hover:bg-black hover:text-white hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
        </form>
      
    </div>
  )
}

export default Contact
