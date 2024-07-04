import "./Intro.css";
import {motion as m} from 'framer-motion';
import goats from './assets/goats.jpg';
import donkey from './assets/girl-goat.jpg';
import cowBottle from './assets/cow -bottle.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion';

function Intro(){

    const intro = "Welcome to Sola Gratia Farm, nestled just outside Alexandria, Ontario. We're excited to share the simple joys of farm life with you!";
    const description = ["Come visit and meet our friendly animals, or let us bring the farm to your special events. Whether you're "+
    "planning a fun family day out, an educational trip, or a unique touch for your celebration, Sola Gratia Farm promises an experience "+
    "full of heartwarming moments and happy memories." ,<br/>, " We can't wait to welcome you!"]

    return(
        <div className="background-container">
        <div className="about-container">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <img className="goat-pic" src={goats} alt="goats"/>
            <div className="bio-and-pic">
            <p className="intro">{intro}</p>
            <p className="bio-description" >{description}</p>
            <div className="bio-pics">
            <img className="donkey-pic" src={donkey} alt="donkey" />
            <img className="cow-bottle" src={cowBottle} alt="cow-bottle"/>
            </div>
            
            </div>
            </motion.div>
            </div>
        </div>
    );  
}
export default Intro;

