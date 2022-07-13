import React, { useState } from 'react'
import "./nav.css"
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const  Nav=() =>{
    const [activeNav, setActiveNav]=useState("#")
  return (
    <nav>
        <a href="#" onClick={()=> setActiveNav("#")} className={activeNav==="#" ? "active" : ""}><FaHome/></a>
        <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav==="#about" ? "active" : ""}><BiUserCircle/></a>
        <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav==="#experience" ? "active" : ""}><BiBookBookmark/></a>
        <a href="#projects" onClick={()=> setActiveNav("#projects")} className={activeNav==="#projects" ? "active" : ""}><RiServiceLine/></a>
        <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav==="#contact" ? "active" : ""}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav