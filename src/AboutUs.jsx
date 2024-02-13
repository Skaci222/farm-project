import './AboutUs.css'
import goats from './assets/goats.jpg'

function AboutUs() {

    const description =["Come for a visit and interact with our adorable and friendly farm animals! Your family is sure to enjoy " + 
    "petting the donkeys, brushing and riding horses, playing with baby goats and hanging out with chickens! "+ 
    "Learn how to milk a cow, collect chicken eggs or maybe explore some tractors. "+
    "There is something for everyone! ", <br/>, <br/>, "We are open to the public on weekends from June-October. "]
    const priceDesc = ["Adult: $13.00",<br/>, <br/>,
    "Children 3 and up: $5.00",<br/>, <br/>,
    "Children under 3: Free",<br/>, <br/>,<br/>,<br/>,
    "Reservations are required. Call or email today!"];
    const timeDesc = ["*Visits are held every Saturday and Sunday"+
    " from June-October, weather permitting"]

    return(
        <div className="about-us-container" 
        style={{width: '100%',
        height: '100%',
        backgroundImage: 'none',
        backgroundColor: 'beige'}}>
            <img className='goats' src={goats} alt="" />
            <div className='about-us-info'>
            <h3 className="about-us-title">Book Your Visit Today!</h3>
            <p className="about-us-desc">{description}</p>
            <h3 className='rates'>Rates:</h3>
            <p className='price-desc'>{priceDesc}</p>
            </div>
        </div>
    );
}
export default AboutUs