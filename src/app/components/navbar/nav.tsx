import React from 'react'

const Head = () => {
  return (
    <div className='text-yellow-200 h-16 bg-black'> 
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl m-2 font-serif font-semibold flex items-center justify-center'>My Portfolio</h1>
        <ul  className=' text-white  flex gap-9 mr-20 font-extrabold font-serif'>
            <a className=' hover:text-teal-400' href="/home">Home</a>
            <a className=' hover:text-teal-400' href="/about">About</a>
            <a className=' hover:text-teal-400' href="/resume">Resume</a>
            <a className=' hover:text-teal-400' href="/projects">Projects</a>
            <a className=' hover:text-teal-400' href="/contact">Contact</a>
        </ul>
        </div>
         </div>
  )
}


export default Head
