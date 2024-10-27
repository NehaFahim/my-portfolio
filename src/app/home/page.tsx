import React from 'react'
import Footer from '../components/navbar/front';
import Navbar from '../components/navbar/header';
// import Navbar from '../components/navbar/header';
// import Footer from "../components/navbar/front";
// import Navbar from "../components/navbar/header";



export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar/>
 
      <Footer />
    </div>
  );
}



