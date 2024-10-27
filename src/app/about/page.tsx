import React from 'react'
// import Footer from '../components/navbar/front';
// import Navbar from '../components/navbar/header';
import Head from '../components/navbar/nav';
import Image from 'next/image';

export default function About() {
  return (
  <div>
      <Head/>
  <div className='w-max'>
<Image src={"/aboutback.jpg"} alt={"backpic"} width={1350} height={1000}></Image>
  <div  className=" w-screen max-h-96   container mx-auto px-9 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">

    <h2 className="text-5xl font-bold text-center pt-28 text-orange-300">About Me</h2>
    <div className=" text-white m-4 p-14  mt-1">
      <p className='text-xl mb-3'>
        Hello! I am <span className="font-semibold">Neha Fahim</span>, an enthusiastic educator and passionate learner. With years of teaching experience, I’ve had the privilege of guiding students at various educational levels, from primary to intermediate and even B.Com. I specialize in teaching subjects like Math, Physics,Statistics and Accounting. where I strive to make these challenging topics accessible and enjoyable for my students.
      </p>
      <p className='text-xl mb-3' >
        Alongside my teaching career, I am on a continuous journey to enhance my skills in web development. I started by learning the fundamentals—HTML, CSS, and JavaScript—through the prestigious Saylani Mass IT Program, which laid the foundation for my programming knowledge. Eager to dive deeper, I enrolled in the Governor Sindh IT Initiative, where I learned TypeScript and Tailwind CSS.
      </p>
      <p className='text-xl mb-3'>
        Currently, I am delving into more advanced frameworks like Next.js and React, exploring how I can build scalable and dynamic web applications. I am also excited to be part of the Web 3.0 and Metaverse course, which equips me with the knowledge to understand the next big wave of technology.
      </p>
      <p className='text-xl mb-2'>
        When I’m not teaching or coding, you can find me exploring new technologies, reading about the latest trends in the tech world, or engaging with the programming community to keep learning and growing.
      </p>
    </div>
  </div>

      </div>
    </div>
  );
}
