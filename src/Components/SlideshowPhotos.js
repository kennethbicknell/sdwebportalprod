import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    '/photos/awardfpl.jpg',
    '/photos/fplshowcase.jpg',
    '/photos/limbitlessarmtracking.jpg'
    ];
    
const SlideshowPhotos = () => {
    return (
        <div className="slide-container">
        <Slide>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Limbitless 2D/3D Arm Tracking</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Florida Power & Light Award</span>
            </div>
            </div>
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Florida Power & Light Showcase</span>
            </div>
            </div>
        </Slide>
        </div>
    )
}
export default SlideshowPhotos;














