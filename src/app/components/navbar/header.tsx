import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter ,FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { HomeIcon, UserIcon, DocumentTextIcon, FolderIcon, BriefcaseIcon,PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="h-screen w-1/5 bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="mb-2 pb-2 ">
        <Image 
          src="/wats1.jpg" 
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full"
        />
        <h2 className="mt-2 text-2xl font-semibold text-yellow-200  ">Neha Fahim</h2>
        <p className="text-teal-200">Teacher by Profession | Developer by Passion</p>
      </div><br />

      <nav className=" grid gap-0  ">
     
        <a href="home" className="text-white hover:text-amber-300"> <HomeIcon className="w-5 h-5 mr-3 absolute left-16" /> Home</a><br />
        <a href="about" className="text-white hover:text-blue-500"> <UserIcon className="w-5 h-5 mr-3 absolute left-16" />About</a><br />
        <a href="resume" className="text-white hover:text-pink-600"> <DocumentTextIcon className="w-5 h-5 mr-3 absolute left-16" />  Resume</a><br />
        <a href="projects" className="text-white hover:text-orange-600"><FolderIcon className="w-5 h-5 mr-3 absolute left-16" /> Projects</a><br />
        <a href="services" className="text-white hover:text-cyan-400"><BriefcaseIcon className="w-5 h-5 mr-3 absolute left-16" /> Services</a><br />
        <a href="contact" className="text-white hover:text-green-500"> <PhoneIcon className="w-5 h-5 mr-3 absolute left-16" /> Contact</a><br />
      </nav>
      <div className="mt-4">

      <div className="flex space-x-4  ">
        <a href="https://github.com/NehaFahim" target="_blank"  className='hover:text-black'>
          <FaGithub className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/neha-fahim-9710952b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className='hover:text-blue-600'>
          <FaLinkedin className="text-3xl" />
        </a>
        
        <a href="https://instagram.com/" target="_blank"   className='hover:text-red-500'>
          <FaInstagram className="text-3xl" />
        </a>
        <a href="https://twitter.com/" target="_blank"   className='hover:text-blue-400'>
          <FaTwitter className="text-3xl" />
          </a>

      </div>
      </div>
    </div>
  );
};

export default Navbar;