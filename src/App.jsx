import NavBar from "./NavBar";
import InfoContainer from "./InfoContainer";
import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import AboutUs from "./AboutUs";
import ImageSlider from "./ImageSlider.jsx"
import Contact from "./Contact"
import cows from "./assets/cows.jpg"
import pic1 from './assets/baby-cow-kids.jpg'
import pic2 from './assets/piggys.jpg'
import pic3 from './assets/girl-goat.jpg'
import pic4 from './assets/kids-bunny.jpg'
import pic5 from './assets/girl-horse.jpg'
import pic6 from './assets/boy-chicken.jpg'
import pic7 from './assets/theo-goat.jpg'
import pic8 from './assets/wanda-anna.jpg'

const App = () => {

  const slides = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  

  return(
    <BrowserRouter>
    <div className="container"> 
    <NavBar/>
    <Routes>
      <Route exact path="" element={<InfoContainer/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/photos"element={<ImageSlider slides={slides}/>}/>
      <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
      </div>
    </BrowserRouter>
  );

}
export default App