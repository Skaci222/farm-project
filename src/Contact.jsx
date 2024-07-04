import './Contact.css'
import React, { useRef } from 'react';
import horses from "./assets/three-horses.jpg"
import babycow from "./assets/baby-cow-2.jpg"
import emailjs from '@emailjs/browser';
import {motion as m} from 'framer-motion';
import { Link } from "@react-email/components"


const contactMessage = "We would love to hear from you!";
const contactMessage2 = "Get in touch to reserve a farm visit or special event.";

function Contact() {
  
  const Email = () => {
    return <Link href="https://www.gmail.com">Example</Link>;
  };

  return (
      <div className='contact-container'>
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} className='contact-info-container'>
      <div className='main-container'>
      <div className='description-container'>
      <p className="contact-info">{contactMessage}</p>
      <p className='contact-info2'>{contactMessage2}</p>
      </div>
      <div className='links-container'>
      <div className='contact-link'>
        <p className='phone-number'><strong>Call Or Text: </strong><a href="tel:519-569-9151">(613)362-9967</a></p>
        <p className='email'><strong>Email: </strong><a href="mailto:info@sola">info@solagratiafarm.com</a></p>
        </div>
      </div>
      <div>
      </div>
      </div>
      </m.div>
      </div>
    
  )
}
export default Contact