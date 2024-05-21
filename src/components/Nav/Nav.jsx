import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineChecklistRtl} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'


const Nav = () => {
   const [activeNav, setActiveNav] = useState('#')
    return (
       <nav>
           <a href="#home" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
           </a>
           <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
           </a>

           <a href="#work-experience" onClick={() => setActiveNav('#work-experience')} className={activeNav === '#workexperience' ? 'active' : ''}>
        <MdOutlineChecklistRtl />
           </a>

           <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdMessage />
           </a>

       </nav>
    )
}

export default Nav
