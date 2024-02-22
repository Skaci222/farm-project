import InfoContainer from "./InfoContainer";
import ImageSlider from "./ImageSlider.jsx"
import Contact from "./Contact"
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes(slides){

    const location = useLocation();

    return (
        <BrowserRouter>
        <div>
        <Routes>
            <Route exact path="" element={<InfoContainer/>}/>
            <Route path="/photos"element={<ImageSlider slides={slides}/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    );
}