import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Intro from "./Intro.jsx"
import Events from "./Events.jsx";
import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import AboutUs from "./Visit.jsx";
import ImageSlider from "./ImageSlider.jsx"
import Contact from "./Contact"
import 'react-bootstrap'
import Footer from './Footer'
import "./App.css"

const App = () => {


  return(
    <BrowserRouter>
    <div className="app"> 
    <NavBar/>
    <Routes>
      <Route exact path="" element={<Welcome/>}/>
      <Route path="/visit" element={<AboutUs/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
      </div>
    </BrowserRouter>
   
  );

}
export default App