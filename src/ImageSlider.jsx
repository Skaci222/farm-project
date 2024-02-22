import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react';
import './ImageSlider.css';
import {motion as m} from 'framer-motion';

function ImageSlider({slides}){

    const [currentIndex, setCurrentIndex] = useState(0);
    function handleLeftClick(){
        if(currentIndex === 0){
            setCurrentIndex(slides.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }
    function handleRightClick(){
        if(currentIndex === slides.length - 1){
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return ( 

    <div style={{backgroundColor: "beige", height:'130%'}}>
    <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
    <div className='img-title-container'>
    <h1 className='img-slider-title'>Photo Gallery</h1>
    </div>
    </m.div>
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} style={{width: "40%",height: "70%", margin: "0 auto", position: "relative"
    }}> 
    <div className='slider' style={{width: "100%",height: "100%",overflow: "hidden", display: "flex", marginTop: "50px"}}>
        {slides.map(slide => (
            <img key={slide} src={slide} className='image-slider-img' style={{translate: `${-100 * currentIndex}%`}}/>
        ))}
         <button className='button-slider' style={{left:-88}} onClick={handleLeftClick}><ArrowBigLeft/></button>
        <button className='button-slider' style={{right:-88}} onClick={handleRightClick}><ArrowBigRight/></button>
    </div>
    </m.div>
    </div>
    

    
    );
}
export default ImageSlider  