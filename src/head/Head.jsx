import React, { useState, useEffect } from "react";
import CarouselImg from "../CarouselImg";

function Head() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'unset'; // Enable scrolling
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className="h-full">
                <nav className="h-15 bg-white divide-x-4 border-black border-b-2">
                    <div className="flex text-xs gap-10 justify-between p-5">
                        <button onClick={toggleMenu} className="block ">
                            MENU
                        </button>
                        <a className="hidden lg:block" href="">OUR PRODUCTS</a>
                        <a className="hidden lg:block" href="">LOGO</a>
                        <a className="hidden lg:block" href="">ABOUT US</a>
                        <a href="">CONTACT US</a>
                    </div>
                </nav>
                <div className={`fixed inset-0 bg-gray-800 bg-opacity-25 transition-opacity ${isMenuOpen ? "opacity-25" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}></div>
                <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Menu</h2>
                        <a href="" className="block mb-2">OUR PRODUCTS</a>
                        <a href="" className="block mb-2">ABOUT US</a>
                        <a href="" className="block mb-2">CONTACT US</a>
                        <button onClick={toggleMenu} className="mt-4">Close</button>
                    </div>
                </div>
                <div className="flex flex-col h-svh">
                    <div className="h-1/2">
                        <h1 className="text-5xl uppercase bg-white p-8 md:px-4 font-mono md:text-8xl sm:text-4xl">
                            interior design and architectural design studio
                        </h1>
                    </div>
                    <div className="h-full bg-[url(./assets/img1.jpg)] bg-cover w-full"></div>
                </div>
            </div>
            <div className="p-4 divide-y-4 border-black border-t-2">
                <h1 className="text-5xl uppercase w-full bg-white font-mono p-4 md:text-7xl">
                    we design every project as a one-off
                </h1>
                <div className="flex gap-4 p-4">
                    <CarouselImg />
                </div>
                <div className="grid md:grid-cols-2 gap-4 p-4">
                    <div className="hidden md:block"></div>
                    <div className="">
                        <h2 className="text-3xl uppercase font-mono md:text-6xl">about us</h2>
                        <p className="text-sm md:text-lg">We are an interior design and architectural design studio based in [Location]. Our team of experienced designers is dedicated to creating unique and functional spaces that reflect our clients' personalities and lifestyles. From concept to completion, we work closely with our clients to ensure that every detail is perfect. Whether you're looking to redesign a single room or undertake a full-scale renovation, we have the expertise and creativity to bring your vision to life.</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col gap-4 md:gap-4 md:flex-row justify-between">
                    <div className="bg-[url(./assets/img4.jpg)] bg-cover w-full h-130"></div>
                    <div className="bg-[url(./assets/img4.jpg)] bg-cover w-full h-70 md:h-[520px] md:w-200"></div>
                </div>
            </div>
        </>
    );
}

export default Head;