import CarouselImg from "../CarouselImg";

function Head() {
    return (
        <>
            <div className="h-full">
                <nav className="w-screen h-15 bg-white divide-x-4 border-black border-b-2">
                    <div className="flex text-xs gap-10 justify-between p-5">
                        <a className=" " href="">MENU</a>
                        <a className="hidden lg:block" href="">OUR PRODUCTS</a>
                        <a className="hidden lg:block" href="">LOGO</a>
                        <a className="hidden lg:block" href="">ABOUT US</a>
                        <a href="">CONTACT US</a>
                    </div>
                </nav>
                <div className="flex flex-col h-svh">
                    <div className="h-1/2">
                        <h1 className="text-5xl uppercase bg-white  p-8 md:px-4  w-dvw font-mono md:text-8xl sm:text-4xl">
                        interior design and architectural design studio
                        </h1>
                    </div>
                    <div className="h-full bg-[url(./assets/img1.jpg)] bg-cover w-full">
                        
                    </div>
                </div>
            </div>
            <div className="p-4 divide-y-4 border-black border-t-2">
                <h1 className="text-5xl uppercase w-full bg-white font-mono p-4 md:text-7xl">
                    we design every project as a one-off
                </h1>
                <div className="flex gap-4 p-4">
                <CarouselImg/>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 p-4">
                    <div className="hidden md:block"></div>
                    <div className="">
                        <h2 className="text-3xl uppercase font-mono md:text-6xl">about us</h2>
                        <p className="text-sm md:text-lg">We are an interior design and architectural design studio based in [Location]. Our team of experienced designers is dedicated to creating unique and functional spaces that reflect our clients' personalities and lifestyles. From concept to completion, we work closely with our clients to ensure that every detail is perfect. Whether you're looking to redesign a single room or undertake a full-scale renovation, we have the expertise and creativity to bring your vision to life.</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col gap-4 md:gap-4 md:flex-row justify-between">
                    <div className="bg-[url(./assets/img4.jpg)] bg-cover w-100 h-130"></div>
                    <div className="bg-[url(./assets/img4.jpg)] bg-cover w-100 h-70  md:h-[520px] md:w-200"></div>
                </div>
            </div>
            
         </>
    );
}

export default Head;