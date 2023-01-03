import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"
import { FaReact } from "react-icons/fa"


const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Made By IsraelBosun With React <FaReact /></p>
        <p className='icons'>
        <a href="https://www.linkedin.com/in/israel-bosun/" target="_blank"><AiFillLinkedin /></a> 
        <a href="https://twitter.com/BosunIsrael" target="_blank"><AiOutlineTwitter /></a> 
        </p>
    </div>
  )
}

export default Footer


// thhth