import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="relative flex-grow bg-gray-100 p-8">
      <div className="absolute inset-0 pt-6 top-3.5">
        <Image
          src="/blurpic.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="blur-md"  
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-100 font-serif ">NEHA FAHIM</h1>
          <p className="text-3xl text-lime-100 mt-2 font-mono">Multidisciplinary Teacher & Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
