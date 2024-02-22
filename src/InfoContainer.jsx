import "./InfoContainer.css"
import AboutUs from "./AboutUs";
import AOS from 'aos';
import React, { useEffect } from 'react';
import {motion as m} from 'framer-motion';

function InfoContainer(){
    useEffect(() => {
        AOS.init({duration: 2000});
      
    }, [])

    return(
        <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className="info-container">
            <h3 className="info-title">Welcome To The Farm</h3>
            <p className="info-description">Our Barn Doors Are Open, Come Explore With Us!</p>
            <div>
            <AboutUs/>
            </div>
        </div>
        </m.div>
        
    );

}
export default InfoContainer