import React from 'react'
import HeroImage from '../asset/Img01.jpg'
//import resume from './GuruPrakash_CV.pdf'
//function downloadResume(){
const PDF_FILE_URL='http://localhost:3000/GuruPrakash_CV.pdf'  
function Hero () {
  const downloadFileAtURL=(url)=>{
    const fileName= url.split('/').pop()
    const aTag= document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold'>I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>GuruPrakash</span>
        , Front-end Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 '>
      Aspiring front-end developer seeking to apply my knowledge of HTML, CSS, JavaScript, and React.js to build user-friendly, responsive web applications. Eager to contribute to a dynamic development team and continue learning in a fast-paced environment.
      </p>
      <div className='mt-8 space-x-4'>
        <a href='#contact'><button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button></a>
        <button onClick={
          ()=>{downloadFileAtURL(PDF_FILE_URL)}
        } className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero