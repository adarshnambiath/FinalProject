import Image from 'next/image'
import bg from '../../public/img/pxfuel-3.jpg'
import Link from 'next/link'

export default function Home() {
  return(
    <div className='relative h-screen'>
      <div className='absolute inset-0'>
        <Image
          src={bg}
          alt='bg-image'
          fill />
      </div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full'>

        <div><h1 className='title font-sans text-fuchsia-50 -mx-13 text-7xl leading-10 decoration-transparent'>Steve Jobs</h1></div>
        <ul className='pt-12'>
         {/* <li>
          <Link href="/early_life"><snap className='text-3xl font-italic font-sans text-red-800'>EARLY LIFE</snap></Link>
        </li> */}
        <li><Link href='stevejobs/early_life'><snap className='text-3xl font-italic font-sans text-blue-700'>EARLY LIFE</snap></Link></li>
        <li><Link href="stevejobs/career"><snap className='text-3xl font-italic font-sans text-blue-700 text-left justify-normal'>CAREER</snap></Link></li>
        <li><Link href="stevejobs/personal_life"><snap className='text-3xl font-italic font-sans text-blue-700 text-left justify-normal'>PERSONAL LIFE</snap></Link></li>
        <li><Link href="stevejobs/achievements"><snap className='text-3xl font-italic font-sans text-blue-700'>ACHIEVEMENTS</snap></Link></li>
        </ul>
      </div>
    </div>
  )
}