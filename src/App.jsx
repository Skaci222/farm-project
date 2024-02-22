import NavBar from "./NavBar";
import InfoContainer from "./InfoContainer";
import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import About from "./About";
import ImageSlider from "./ImageSlider.jsx"
import Contact from "./Contact"
import pic1 from './assets/baby-cow-kids.jpg'
import pic3 from './assets/girl-goat.jpg'
import pic4 from './assets/kids-bunny.jpg'
import pic7 from './assets/theo-goat.jpg'
import pic8 from './assets/wanda-anna.jpg'
import pic9 from './assets/tractor.jpg'
import pic10 from './assets/baby-cow-2.jpg'
import pic12 from './assets/baby-goat.jpg'
import pic14 from './assets/chicken-boy.jpg'
import pic15 from './assets/chicken-hold.jpg'
import pic16 from './assets/chicken-pet.jpg'
import pic17 from './assets/cow -bottle.jpg'
import pic18 from './assets/cow-chilling.jpg'
import pic19 from './assets/cow-milk.jpg'
import pic20 from './assets/donkey-apple.jpg'
import pic21 from './assets/donkey-brushing.jpg'
import pic22 from './assets/donkey-face.jpg'
import pic23 from './assets/farm-visit.jpg'
import pic24 from './assets/girl-horseride.jpg'
import pic25 from './assets/girl-kid-goat.jpg'
import pic26 from './assets/goat-babies.jpg'
import pic27 from './assets/goat-funny.jpg'
import pic28 from './assets/goat-milking.jpg'
import pic29 from './assets/horse-house.jpg'
import pic31 from './assets/horse-leading.jpg'
import pic32 from './assets/jersey-cow.jpg'
import pic34 from './assets/kids-chickens.jpg'
import pic35 from './assets/kids-goats.jpg'
import pic36 from './assets/kids-playing.jpg'
import pic37 from './assets/petting-horses.jpg'
import pic38 from './assets/pig-pet.jpg'
import pic39 from './assets/pigs.jpg'


const App = () => {

  const slides = [pic23, pic3, pic4, pic7, pic8, pic9, pic10, pic1,
    pic12, pic14, pic15, pic16, pic17, pic18, pic19, pic20, 
    pic21, pic22, pic24, pic25, pic26, pic27, pic28, pic29, pic31, 
    pic32, pic34, pic35, pic36, pic37, pic38, pic39];
  

  return(
    <BrowserRouter>
    <div className="container"> 
    <NavBar/>
    <Routes>
      <Route exact path="" element={<InfoContainer/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/photos"element={<ImageSlider slides={slides}/>}/>
      <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
      </div>
    </BrowserRouter>
  );

}
export default App