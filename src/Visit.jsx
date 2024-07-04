import './Visit.css'
import Contact from './Contact'
import chicken from './assets/kids-chickens.jpg'
import horses from './assets/three-horses.jpg'
import playing from './assets/kids-playing.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import pic34 from './assets/kids-chickens.jpg'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'

function Visit() {
    useEffect(() => {
        AOS.init({duration: 500});
      
    }, [])

    const intro = "Visit us and meet our friendly animals!"
    const description = ["Come for a farm visit to get up close with our wonderful animals " +
    "and first hand experience at different farming activities."+
    " Learn to collect fresh chicken eggs straight from the coop! Ever wanted to try milking a cow? We'll show you how! And don't "+
    "forget to give our goats, horses and donkeys some love by brushing them or giving them cuddles. For the adventurous, we offer "+
    "horseback riding too!", <br/>,<br/>, "Our farm isn't just a place to visit -- it's a place to make memories. Come join us for a day of farm fun and  " +
    "experience the magic of country living!"]
    

    return(
        <div className="about-us-container" >
             <div style={{display: 'flex'}}>
             <div className='goat-pic-container'>
             <img className='chicken' data-aos='fade-in' src={chicken} alt="goats-pic" />
            </div>
            <div className='about-us-info-container' data-aos='fade-in'>
            <p className='visit-us-intro'>{intro}</p>
            <p className="about-us-desc">{description}</p>
            <div className='rates-price' >
            <ul className='price-desc'>
                <p className='rates'>Rates:</p>
                <li>
                General Admission: $13.00
                </li>
                <li>
                Children 3 and up: $5.00
                </li>
                <li>
                Children under 3: Free
                </li>
            </ul>
            </div>
            <Link to="/contact"><button className='reserve-button'>Book Your Visit Today!</button></Link>
            </div>
            <div className='pic-right'> 
            <img className='playing-pic' data-aos='fade-in' src={playing} alt="3 horses" />
            </div>
            </div>
        </div>
    );
}
export default Visit