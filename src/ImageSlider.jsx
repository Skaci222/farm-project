import {useState} from 'react';
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react';
import './ImageSlider.css';

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

    <div style={{backgroundColor: "beige", overflow: 'hidden'}}> 

    <div style={{ width: "35%",height: "90%",margin: "0 auto",display: "flex",position: "relative"
    }}> 
    <div className='slider' style={{width: "100%",height: "100%",overflow: "hidden", display: "flex"}}>
        {slides.map(slide => (
            <img key={slide} src={slide} className='image-slider-img' style={{translate: `${-100 * currentIndex}%`}}/>
        ))}
         <button className='button-slider' style={{left:0}} onClick={handleLeftClick}><ArrowBigLeft/></button>
        <button className='button-slider' style={{right:0}} onClick={handleRightClick}><ArrowBigRight/></button>
    </div>
    <div style={{
        position: "absolute",
        bottom: "0.5rem",
        left: "50%",
        translate: "-50%",
        display: "flex",
        gap: "0.25rem",
    }}>
        {slides.map((_, index) => (
            <button key={index} className='img-slider-dot-btn' onClick={() => 
                setCurrentIndex(index)}>{index === currentIndex ? <CircleDot/> : <Circle/>}</button>))}
    </div>
    </div>
    </div>
    
    );
}
export default ImageSlider  