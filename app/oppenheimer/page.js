import Image from 'next/image';
import MainBackground from "../../public/img/pxfuel-2.jpg";
import Link from 'next/link'


export default function Home() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <Image
                    src={MainBackground}
                    alt="background image"
                    className='bg-cover'
                    fill
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
 
                <h1 className='text-7xl   font-mono text-stone-600 tracking-widest -mx-13'>J Robert Oppenheimer </h1>
                <ul>
                <li><Link href="oppenheimer/about"><snap className='text-3xl  font-italic font-sans text-stone-100 text-left justify-normal hover:text-decoration-line:  '> &#183; ABOUT</snap></Link></li>
                  <li>
                    <Link href="oppenheimer/early_life"><snap className='text-3xl  font-italic font-sans text-stone-100'>&#183; EARLY LIFE</snap></Link>
                  </li>
                  <li><Link href="oppenheimer/career"><snap className='text-3xl  font-italic font-sans text-stone-100 text-left justify-normal'>&#183; CAREER</snap></Link></li>
                  {/* <li><Link href="/achievements"><snap className='text-3xl font-italic font-sans text-slate-600'>ACHIEVEMENTS</snap></Link></li> */}
                  <li><Link href="oppenheimer/death"><snap className='text-3xl font-italic font-sans text-white'>DEATH AND LEGACY</snap></Link></li>
                </ul>
          
                
            </div>
        </div>
        
    );
}