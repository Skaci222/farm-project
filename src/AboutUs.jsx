import './AboutUs.css'
import goats from './assets/goats.jpg'
import horses from './assets/three-horses.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import pic34 from './assets/kids-chickens.jpg'

function AboutUs() {
    useEffect(() => {
        AOS.init({duration: 2000});
      
    }, [])

    const description =["Visit our family farm for a day of fun! Meet friendly animals, enjoy farming activities, "+
    "and make lasting memories together. Join us for a day of wholesome family fun in the countryside!", <br/>, <br/>, <br/>,
    "We are open to the public on weekends from June-October. "]
    const priceDesc = [<strong>Rates:</strong>, <br/>, <br/> ,"General Admission: $13.00", <br/>, <br/>, <br/>,
    "Children 3 and up: $5.00",<br/>, <br/>, <br/>,
    "Children under 3: Free",<br/>, <br/>,<br/>,
    <strong>Reservations are required. Call or email today!</strong>];
    

    return(
        <div className="about-us-container" 
        style={{
        backgroundImage: 'none',
        backgroundColor: 'beige',
        border: 'solid beige'}}>
            <div className='visit-title-container'>
             <h3 className="about-us-title" data-aos='zoom-in'>Book a Farm Visit</h3>
            </div>
             <div style={{display: 'flex'}}>
             <div className='goat-pic-container'>
             <img className='goats' data-aos='fade-right' src={pic34} alt="goats-pic" />
            </div>
            <div className='about-us-info-container'>
            <p className="about-us-desc">{description}</p>
            <div className='pic-and-rates' style={{display: 'flex'}}>
            <p className='price-desc'>{priceDesc}</p>
            <img className='three-horses' data-aos='fade-left' src={horses} alt="3 horses" />
            </div>
            </div>
            </div>
        </div>
    );
}
export default AboutUs