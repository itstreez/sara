import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
const Contact = () => {
    return (
      <section id="contact">
   <h5> Get In Touch</h5>
   <h2> Contact Me</h2>
 <div className="container contact__container">
   <div className="contact__options">
     <article className="contact__option">
     <MdOutlineEmail className="contact_option-icon" />
       <h4> Email</h4>
       <h5> saraalayache@gmail.com
       </h5>
       <a href="mailto:saraalayache@gmail.com"> Send a message </a>

     </article>
   </div>
   <form action="">
  <input type="text" name="name" placeholder="Your full name" required />
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" rows="7" placeholder="Your message" required />
  <button type="submit" className="btn btn-primary"> Send message</button>

   </form>

   </div>
      </section>
    )
}

export default Contact
