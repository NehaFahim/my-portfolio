import React from 'react'
import Head from '../components/navbar/nav';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function resume() {
  return (
    <div>
      <Head />
      
       <Image src={"/resume back.avif"} alt={"background"} width={1400} height={900}></Image>
       
 <div className='absolute  top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-8/12' > 
      <Image src={"/resume.jpg"} alt={"resumepic"} width={1400} height={1300}></Image>

     </div>
     <div>
      <FaGithub className='absolute -bottom-20 left-1/3 text-2xl  text-black' />
      <a href="https://github.com/NehaFahim/my-resume.git" target="_blank" >   <button className='absolute -bottom-20 left-1/3  font-bold font-serif bg-blue-700 text-1xl hover:bg-emerald-400 text-white w-4/12 h-6 '>Github Link</button>
    
        </a>
        <FaGithub className='absolute -bottom-20 left-1/2 text-2xl ml-16 text-black' />
     </div>
     </div>
  );
}
