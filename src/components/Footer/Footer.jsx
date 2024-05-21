import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
    return (
       <footer>

           <ul className="permalinks">
               <li><a href="#home"> Home</a></li>
               <li><a href="#about"> About</a></li>
               <li><a href="#work-experience"> Education</a></li>
               <li><a href="#contact"> Contact</a></li>
           </ul>



           <div className="footer_copyright">
               <small> &copy; All Rights Reserved</small>
           </div>
       </footer>
    )
}

export default Footer
