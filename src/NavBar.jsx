import Logo from './assets/farm-pic-sg.jpg'
import InfoContainer from './InfoContainer';
import './NavBar.css'
import { NavLink, useLocation } from 'react-router-dom'
import React, {useState} from 'react'


const NavBar = () => {

    const [navColor, setNavColor] = useState('');
    const location = useLocation();
    React.useEffect(() => {
        if(location.pathname === "/"){
            setNavColor('transparent');
        } else {
            setNavColor('rgba(247, 236, 197)');
        }
    }, [location]);
    

    return(
       <div className="navbar" style={{backgroundColor: navColor}}>
        <img className='logo' src={Logo} alt='logo'/>
        <h1 className='title'></h1>
        <nav>
            <NavLink to = "">Home</NavLink>
            <NavLink to= "/about">Visit Us</NavLink>
            <NavLink to="/photos">Photos</NavLink> 
            <NavLink to="/contact">Contact</NavLink>
        </nav>
       </div>
    );

}
export default NavBar