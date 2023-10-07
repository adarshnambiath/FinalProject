import React from 'react'
import OPPImage from '../../../public/img/Oppenheimer_about.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div className='header'>
        <h1 className='text-center justify-center mt-5 text-slate-500 text-8xl text font-serif'>ABOUT</h1>
    <div className='body flex flex-row flex-initial mt-5 '>
    <div className='w-1/4'><Image className='ml-3 w-90' src={OPPImage} ></Image></div>
    
    <div className='w-3/4 text flex-column ml-5'>
    <p className='text-slate-300 tracking-widest'>J Robert Oppenheimer was born on <snap className='text-blue-500'>April 22, 1904</snap>. He was an American theoretical physicist and director of the <snap className='text-blue-500'>Manhattan Project's Los Alamos Laboratory</snap> during <snap className='text-blue-500'>World War II. &nbsp;</snap></p>
    <br></br>
    
    <p className='text-slate-300 tracking-widest'>&nbsp;Born in New York City, Oppenheimer earned a <snap className='text-blue-500'>bachelor</snap> of arts degree in chemistry from <snap className='text-blue-500'>Harvard University</snap> in 1925 and a doctorate in physics from the University of Göttingen in Germany in 1927, where he studied under Max Born. After research at other institutions, he joined the physics department at the <snap className='text-blue-500'>University of California, Berkeley</snap>, where he became a full professor in 1936. He made significant contributions to theoretical physics, including achievements in <snap className='text-blue-500'>quantum mechanics</snap> and <snap className='text-blue-500'>nuclear physics</snap> such as the <snap className='text-blue-500'>Born–Oppenheimer approximation</snap> for molecular wave functions, work on the theory of electrons and positrons, the <snap className='text-blue-500'>Oppenheimer–Phillips</snap> process in nuclear fusion, and early work on <snap className='text-blue-500'>quantum tunneling</snap>. With his students, he also made contributions to the <snap className='text-blue-500'>theory of neutron stars</snap> and <snap className='text-blue-500'>black holes, quantum field theory</snap>, and the interactions of <snap className='text-blue-500'>cosmic rays</snap>.</p>
    <br></br>
    <p className='text-slate-300 tracking-widest'>In 1942, Oppenheimer was recruited to work on the Manhattan Project, and in 1943 he was appointed director of the project's <snap className='text-blue-500'>Los Alamos Laboratory</snap> in New Mexico, tasked with developing the first nuclear weapons. His leadership and scientific expertise were instrumental in the project's success. On July 16, 1945, he was present at the first test of the atomic bomb, <snap className='text-blue-500'>Trinity</snap> . In August 1945, the weapons were used against Japan in the <snap className='text-blue-500'>bombings of Hiroshima and Nagasaki</snap>, the only use of nuclear weapons in an armed conflict.</p>
    <br></br>
    <p className='text-slate-300 tracking-widest'>In 1947, Oppenheimer became the director of the <snap className='text-blue-500'>Institute for Advanced Study</snap> in Princeton, New Jersey, and chaired the influential General Advisory Committee of the newly created <snap className='text-blue-500'>U.S. Atomic Energy Commission</snap>. He lobbied for international control of nuclear power to avert nuclear proliferation and a nuclear arms race with the <snap className='text-blue-500'>Soviet Union</snap>. He opposed the development of the hydrogen bomb during a 1949–1950 governmental debate on the question and subsequently took positions on defense-related issues that provoked the ire of some U.S. government and military factions. During the <snap className='text-blue-500'>second Red Scare</snap>, Oppenheimer's stances, together with his past associations with the Communist Party USA, led to the revocation of his security clearance following a 1954 security hearing. This effectively ended his access to the government's atomic secrets and thus his career as a nuclear physicist. Stripped also of his direct political influence, Oppenheimer continued to lecture, write, and work in physics. In 1963, he was awarded the <snap className='text-blue-500'>Enrico Fermi Award</snap> as a gesture of political rehabilitation. He died four years later of throat cancer. In 2022, the federal government vacated the 1954 revocation of <snap className='text-blue-500'>Oppenheimer's security clearance</snap>.</p>
    </div>
    
    
    </div>
        
    </div>
  )
}