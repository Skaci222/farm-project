import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion as m} from 'framer-motion';


const contactMessage = ["We would love to hear from you! " , <br/>, 
"For any questions or to book a visit, call 613-362-9967 or send us a mesage below."];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7gzh3jr', 'template_rf5m3r8', form.current, {
        publicKey: 'iuiodCFprMhwKFL4E',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div  style={{backgroundColor: 'beige'
    }}>
      <m.div initial={{opacity: 0}} animate={{opacity: 1}} className='contact-info-container'>
        <div className='contact-title-container'>
      <h1 className="contact-title">Contact Us</h1>
      </div>
      <p className="contact-info">{contactMessage}</p>
      <div style={{}}>
      <form ref={form} onSubmit={sendEmail} style={{display: 'flex', 
      flexDirection: 'column'}}>
      <h3 className='title-name'>Name</h3>
      <input className='contact-name' type='text' name='user_name'/>
      <h3 className='title-email'>Email</h3>
      <input className='contact-email'type='email' name='user_email'/>
      <h3 className='title-message'>Message</h3>
      <textarea className="contact-message" name='message'></textarea>
      <input className="contact-button" type='Submit' value='Send'></input>
      </form>
      </div>
      </m.div>
    </div>
  )
}
export default Contact