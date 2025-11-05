// import React, { useState } from 'react';

// const Carousel = ({ images }) => {
//     // Duplicating the first and last images for infinite scroll effect
//     const extendedImages = [images[images.length - 1], ...images, images[0]];
//     const [currentIndex, setCurrentIndex] = useState(1); // Start at the first actual image

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             const newIndex = prevIndex + 1;
//             // If we reach the last duplicate image, go to the first actual image
//             return newIndex >= extendedImages.length - 1 ? 1 : newIndex;
//         });
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             const newIndex = prevIndex - 1;
//             // If we reach the first duplicate image, go to the last actual image
//             return newIndex <= 0 ? extendedImages.length - 2 : newIndex;
//         });
//     };

//     return (
//         <div className="relative md:w-[800px] max-w-lg mx-5 overflow-hidden">
//             <div className="flex md:w-full transition-transform duration-500" 
//                 style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}>
//                 {extendedImages.map((image, index) => (
//                     <div key={index} className="flex-shrink-0 w-1/3 relative">
//                         <img 
//                             src={image} 
//                             alt={`Slide ${index}`} 
//                             className="w-full  h-100 rounded-lg shadow-md md:w-[400px] md:h-lvh"
//                         />
//                     </div>
//                 ))}
//             </div>
//             <button 
//                 onClick={prevSlide} 
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//             >
//                 &#10094;
//             </button>
//             <button 
//                 onClick={nextSlide} 
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// };

// export default Carousel;

import React, { useState } from 'react';

const Carousel = ({ images }) => {
    // Duplicating the first and last images for infinite scroll effect
    const extendedImages = [images[images.length - 1], ...images, images[0]];
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first actual image

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= extendedImages.length - 1 ? 1 : newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex <= 0 ? extendedImages.length - 2 : newIndex;
        });
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex gap-5 h-70  transition-transform duration-500" 
                style={{ transform: `translateX(-${(currentIndex * 100) / 2}%)` }}>
                {extendedImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-1/3 relative">
                        <img 
                            src={image} 
                            alt={`Slide ${index}`} 
                            className="object-cover w-full h-full rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
            <button 
                onClick={prevSlide} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                &#10094;
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;