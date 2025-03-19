import React from 'react'
import './Home.css'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";

const Home = () => {
  return (
    <div className='outerBox'>
        <div className='innerFirst'>
        <div className='first'>
           <p> Hello, My name is</p>
        </div>
        <div className='second'>
            <h1>Srihari</h1>
            <h1>Mannepalli</h1>
        </div>
        <div className='content'>
            <p> Iam Full Stack Java Developer</p>
        </div>
        <div className='Images'>
            <IoLogoLinkedin size={40} />
            <FaGithub  size ={40}/>
            <FaInstagram size = {40} />
            <BsTwitterX  size= {40}/>
            <MdOutlineWhatsapp size = {40} />
        </div>
        </div>
        <div className='png'>
            <img src='https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png'/>
        </div>

    </div>
  )
}

export default Home