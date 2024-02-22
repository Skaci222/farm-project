import "./About.css";
import {motion as m} from 'framer-motion';
import goats from './assets/goats.jpg';
import donkey from './assets/girl-goat.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion';

function About(){

    const description = ["Welcome to Sola Gratia Farm, a cozy family farm where the fun never ends! We're all about bringing " +
    "families closer to nature and each other.", <br/>, <br/>,"When visiting the farm, you'll get up close with our wonderful animals, " +
    "and get first hand experience at different farming activities"+
    " Learn to collect fresh chicken eggs straight from the coop! Ever wanted to try milking a cow? We'll show you how! And don't "+
    "forget to give our goats, horses and donkeys some love by brushing their soft fur or giving them cuddles. For the adventurous, we offer "+
    "horseback riding too!", <br/>,<br/>, "Our farm isn't just a place to visit -- it's a place to make memories. Come join us for a day of farm fun and  " +
    "experience the magic of country living!"]

    return(
        <div className="about-container">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <div className='title-container'>
             <h1 className='about-title'>About Us</h1>
            </div>
            <img className="goat-pic" src={goats} alt="goats"/>
            <p className="bio-description" >{description}</p>
            <img className="donkey-pic" src={donkey} alt="donkey" />
            </motion.div>
        </div>
    );  
}
export default About;

