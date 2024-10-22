import React from 'react'
import EcomImg from '../asset/Img01.jpg'
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
/*const project=
  {
    id: 1,
    name:"E-commerce Website",
    technologies:"Html,CSS,JavaScript,React JS and Node JS",
    image: EcomImg,
    github:"https://fonts.google.com/selection/embed",
  }*/
const Project =()=>{
  return (
    <div className='bg-black text-white py-20' id='project'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>Project</h2>
      <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        <img src={EcomImg} alt="" className='w-72 h-80 rounded object-cover mb-8 md-0'/>
        <div className='flex-1'>
        <p className='text-lg mb-8'>
        Developed a fully functional e-commerce website using React, featuring modules such as shopping cart, payment methods, admin management, and product listings. Focused on building responsive, user-friendly interfaces and seamless functionality to enhance the user experience.
        </p>
        <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Technologies Used</h2>
        <p className='mt-7 mb-5'>Html & CSS , javascript,React JS and Node JS</p>
        <a href='https://github.com/Guruprakash-33/E-Commerce-Website.git'target='_blank' className='text-gray-400 hover:text-white text-2xl'> 
            <FaGithub />
          </a>
      </div>
    </div>
  </div>
</div>













    /*<div className='bg-black text-white py-20' id="project">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
       <h2 className='text-4xl font-bold text-center mb-8'>Project</h2>
          <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={EcomImg} alt="" className='w-72 h-80 rounded object-cover mb-8 md-0'/>
            <div className='flex-1'>
          <p className='text-lg mb-8'>
            I am a passionate Front-end Developer with a focus on building modern and responsive web applications. With a strong foundation in front-end technologies like html, css, javascript and library like react.I strive to create seamless and efficient user experiences.
          </p>
          </div>
       </div>
      </div>
    </div>*/
  )
}
export default Project