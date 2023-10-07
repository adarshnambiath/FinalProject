import React from 'react'
import OPPimage_1 from '../../../public/img/oppenheimer_early.jpg'
import Image from 'next/image'

export default function page() {
  return (
    <div className='header'>
        <h1 className='text-center justify-center mt-5 text-slate-500 text-8xl text font-serif'>EARLY LIFE</h1>
    <div className='body flex flex-row flex-initial mt-5 '>
    <div className='w-1/4'><Image className='mt-2' src={OPPimage_1} width={450} height={300} ></Image>
    <p className='text-xs' >Heike Kamerlingh Onnes' Laboratory in Leiden, Netherlands, July 1927. Oppenheimer is in the middle row, second from the left</p></div>
    
    <div className='text flex-column ml-5 w-3/4'>
    
    <p className=' text-slate-200 tracking-widest'>Oppenheimer was born Julius Robert Oppenheimer  into a <snap className='text-blue-500'>non-observant Jewish family</snap> in New York City on April 22, 1904, to <snap className='text-blue-500'>Ella</snap> (née Friedman), a painter, and <snap className='text-blue-500'>Julius Seligmann Oppenheimer</snap>, a successful textile importer. Robert had a younger brother, <snap className='text-blue-500'>non-observant Jewish family</snap> in New York City on April 22, 1904, to <snap className='text-blue-500'>Ella</snap> (née Friedman), a painter, and <snap className='text-blue-500'>Frank</snap>, who also became a physicist. Their father was born in <snap className='text-blue-500'>Hanau</snap>, then part of the Hesse-Nassau province of the <snap className='text-blue-500'>Kingdom of Prussia</snap>, and came to the United States as a teenager in 1888 with few resources and no money, higher education, or knowledge of the English language. He was hired by a textile company and within a decade was an executive there, eventually becoming wealthy. In 1912, the family moved to an apartment on <snap className='text-blue-500'>Riverside Drive</snap> near West 88th Street, Manhattan, an area known for luxurious mansions and townhouses. Their art collection included works by <snap className='text-blue-500'>Pablo Picasso, Édouard Vuillard</snap>, and <snap className='text-blue-500'>Vincent van Gogh</snap>.</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Oppenheimer entered <snap className='text-blue-500'>Harvard College</snap> in 1922 at age 18. He majored in chemistry; Harvard also required studies in history, literature, and philosophy or mathematics. To compensate for the delay caused by his illness, he took six courses each term instead of the usual four. He was admitted to the undergraduate honor society <snap className='text-blue-500'>Phi Beta Kappa</snap> and was granted graduate standing in physics on the basis of independent study, which meant he could bypass basic courses in favor of advanced ones. He was attracted to experimental physics by a course on thermodynamics taught by <snap className='text-blue-500'>Percy Bridgman</snap>. Oppenheimer graduated from Harvard in 1925 with a <snap className='text-blue-500'>Bachelor of Arts</snap>, summa cum laude, after only three years of study.</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>After being accepted at <snap className='text-blue-500'>Christ's College, Cambridge</snap> in 1924, Oppenheimer wrote to <snap className='text-blue-500'>Ernest Rutherford</snap> requesting permission to work at the <snap className='text-blue-500'>Cavendish Laboratory</snap>, though Bridgman's letter of recommendation said that Oppenheimer's clumsiness in the laboratory suggested that theoretical, rather than experimental, physics would be his forte. Rutherford was unimpressed, but Oppenheimer went to Cambridge nonetheless; <snap className='text-blue-500'>J. J. Thomson</snap> ultimately accepted him on the condition that he complete a basic laboratory course.</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Oppenheimer was a tall, thin <snap className='text-blue-500'>chain smoker</snap>, who often neglected to eat during periods of intense concentration. Many friends said he could be self-destructive. Fergusson once tried to distract Oppenheimer from his apparent depression by telling him that he (Fergusson) was to marry his girlfriend; Oppenheimer jumped on Fergusson and tried to strangle him. Oppenheimer was plagued by periods of depression throughout his life, and once told his brother, "I need physics more than friends".</p>
    <br></br>
    <p className='text-slate-200 tracking-widest'>Oppenheimer obtained his <snap className='text-blue-500'>Doctor of Philosophy</snap> degree in March 1927 at age 23, supervised by Max Born. After the oral exam, <snap className='text-blue-500'>James Franck</snap>, the professor administering, reportedly said, "I'm glad that's over. He was on the point of questioning me." Oppenheimer published more than a dozen papers while in Europe, including many important contributions to the new field of quantum mechanics. He and Born published a famous paper on the <snap className='text-blue-500'>Born–Oppenheimer approximation</snap>, which separates nuclear motion from electronic motion in the mathematical treatment of molecules, allowing nuclear motion to be neglected to simplify calculations. It remains his most cited work.</p>
    <br></br>
    </div>
    
        
    </div>
    </div>
  )
}