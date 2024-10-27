import Footer from './components/navbar/front';
import Link from 'next/link';
import Navbar from './components/navbar/header';



 function Page () {
  return (
    <div className="flex min-h-screen">
      <Navbar />
     
      
      <Link href={"/home"}></Link>
      <Link href={"/about"}></Link> 
      <Link href={"/projects"}></Link>
      <Link href={"/contact"}></Link>
      <Footer />
    </div>
    
  );
};
    export default Page;





