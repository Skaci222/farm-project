import "./Welcome.css"
import Intro from "./Intro";
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import {motion as m} from 'framer-motion';
import cows from "./assets/cows.jpg"


 const description = ["Welcome to Sola Gratia Farm, a cozy family farm where the fun never ends! We're all about bringing " +
    "families closer to nature and each other.", <br/>, <br/>,"When visiting the farm, you'll get up close with our wonderful animals, " +
    "and get first hand experience at different farming activities"+
    " Learn to collect fresh chicken eggs straight from the coop! Ever wanted to try milking a cow? We'll show you how! And don't "+
    "forget to give our goats, horses and donkeys some love by brushing their soft fur or giving them cuddles. For the adventurous, we offer "+
    "horseback riding too!", <br/>,<br/>, "Our farm isn't just a place to visit -- it's a place to make memories. Come join us for a day of farm fun and  " +
    "experience the magic of country living!"]

function Welcome(){
    useEffect(() => {
        AOS.init({duration: 2000});
      
    }, [])

    

    return(
        <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className="info-container">
        <h3 className="info-title">Welcome To <br></br>Sola Gratia Farm</h3>
        </div>
        <div>
        <Intro/>
        </div>
        </m.div>
        
    );

}
export default Welcome;