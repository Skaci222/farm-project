import "./Events.css"
import donkey from "./assets/donkey-face.jpg"
import goats from "./assets/goaties.jpg"
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Events(){

    useEffect(() => {
        AOS.init({duration: 500});
      
    }, [])

    const title = "Make your special event unforgettable by inviting our delightful farm animals!";
    const description= "Whether it's a birthday party, corporate gathering, or event of any kind, our friendly and well-cared-for animals" +
    " add a touch of rustic charm and interactive fun. Guests of all ages will enjoy petting, feeding, and learning " +
    "about these adorable creatures. We ensure a safe, clean, and engaging experience tailored to your event's needs. " +
    "Book now to create lasting memories with our beloved farm friends!"

    return (
        <div className="events-container">
         <div className="top-container">
         <div className="pic-left">
        <img className="goats" src={goats}/>
        </div>  
        <div className='events-info-container' data-aos='fade-in'>
        <p className="events-title" >{title}</p>
        <p className="events-desc" >{description}</p>
        <p className="scheduling">Please <a href="/contact">contact us</a> to schedule a special event.</p>
        </div>
        <div className='pic-right'> 
        <img className='donkey' data-aos='fade-in' src={donkey} alt="goats-pic"/>
        </div>
        </div>
    </div>
    );
}
export default Events
