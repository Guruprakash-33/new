import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-6 lx-24'>
        <div className='flex flex-col md:flex-row ms:space-x-12 items-center mb-4'>
        <div className='flex-1 mb-4 md:mb-0'>
          <h3 className='text-2xl font-bold mb-2'>GuruPrakash</h3>
          <p className='text-gray-400'>Front-end Developer</p>
        </div>
        <div className='flex-1 w-full'>
          <form className='flex items-center justify-center'>
            <input  type="email" placeholder="Your Email"
            className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' />
            <button
            type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()}
        </p>
        <div className='flex space-x-4 my-4 md:my-0'>
          <a href='https://www.instagram.com/__guruhere___/profilecard/?igsh=MTN6MG9tMDRjODVoZA=='target='_blank' className='text-gray-400 hover:text-white'> 
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/guru-prakash-472b7427b' target='_blank' className='text-gray-400 hover:text-white' > 
            <FaLinkedin />
          </a>
          <a href='https://github.com/Guruprakash-33/myportfolio.git'target='_blank' className='text-gray-400 hover:text-white'> 
            <FaGithub />
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}
export default Footer
