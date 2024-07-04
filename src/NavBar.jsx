import Logo from './assets/farm-pic-sg.jpg'
import Welcome from './Welcome';
import './NavBar.css'
import { NavLink, useLocation } from 'react-router-dom'
import React, {useState} from 'react'


const NavBar = () => {

    const [navColor, setNavColor] = useState('');
    const location = useLocation();
   /* React.useEffect(() => {
        if(location.pathname === "/"){
            setNavColor('transparent');
        } else {
            setNavColor('#FAF9F6');
        }
    }, [location]);*/
    const isHomePage = location.pathname === "/";
    

    return(
       <nav className={isHomePage ? 'navbar transparent' : 'navbar gradient'}>
        <div className='navbar-container'>
        <img className='logo' src={Logo} alt='logo'/>
        <div className='nav-links'>
        <NavLink to = "">Home</NavLink>
            <NavLink to= "/visit">Visit Us</NavLink>
            <NavLink to="/events">Special Events</NavLink> 
            <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
        </nav>
       
    );

}
export default NavBar