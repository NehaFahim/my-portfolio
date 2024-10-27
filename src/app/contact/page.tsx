import React from 'react';
import Head from '../components/navbar/nav';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';


const Contact = () => {
  return (
    <div>
      <Head/>
      <Image src={"/contactus.jpg"} alt={"back"} width={1400} height={1000}></Image>
    
    <section className="bg-gray-100 py-16 ">
      <div className="w-6/12  mx-auto px-3 m-8 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 ">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2> */}
        
        <div className="bg-yellow-500 shadow-md rounded-lg p-4  ">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-2xl  text-black font-medium m-4">Full Name</label>
                <input type="text" id="name" name="name" placeholder='Enter your name here' className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-2xl text-black font-medium m-4">Email Address</label>
                <input type="email" id="email" name="email" placeholder='Enter your Email address' className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-2xl text-black font-medium">Message</label>
              <textarea id="message" name="message" placeholder='Write your thoughts or questions here....'  className="mt-1 p-3 border border-gray-900 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div className="mt-6 text-center">
              <button type="submit" className="px-6 py-3 m-4 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 shadow-lg shadow-gray-600/55  flex justify-start">
                Send Message
                </button>
             
              <a href="https://github.com/NehaFahim" target="github" className='hover:text-violet-800 inline-block px-4 py-6 hover:shadow-2xl hover:scale-105 transition transform duration-300'>
          <FaGithub className="text-5xl" />
        </a>
        <a href="https://www.linkedin.com/in/neha-fahim-9710952b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className='hover:text-blue-600  inline-block px-4 py-6 hover:shadow-2xl hover:scale-105 transition transform duration-300'>
          <FaLinkedin className="text-5xl" />
        </a>
        <a href="https://instagram.com/" target="_blank"  className='hover:text-red-500 inline-block px-4 py-6 hover:shadow-2xl hover:scale-105 transition transform duration-300'>
          <FaInstagram className="text-5xl" />
        </a>
        <a href="https://twitter.com/" target="_blank" className='hover:text-blue-400 inline-block px-4 py-6 hover:shadow-2xl hover:scale-105 transition transform duration-300'>
          <FaTwitter className="text-5xl" />
          </a>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
