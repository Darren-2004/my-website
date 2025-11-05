import React from 'react';
import Carousel from './Carousel';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.png';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img1 from './assets/img1.jpg'

const CarouselImg = () => {

    const images = [
        img2,
        img3,
        img4,
        img5,
        img1
    ];

    return (
        <div className="md:w-full flex items-center justify-center bg-gray-100">
            <Carousel images={images} />
            
        </div>
    );
};

export default CarouselImg;