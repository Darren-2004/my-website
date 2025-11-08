import { useState } from "react";
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpeg'

function Projects() {
    const [projects, setProjects] = useState([
        { id: 1, img: img1, name: "Project Numero Un", price: '2,000,000' },
        { id: 2, img: img2, name: "Project Numero Deux", price: '3,000,000' },
        { id: 1, img: img1, name: "Project Numero Un", price: '2,000,000' },
        { id: 2, img: img2, name: "Project Numero Deux", price: '3,000,000' },
    ]);

    return (
        <>
            <div className="flex flex-col h-auto min-[480px]:grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {projects.map((item) => (
                    <div key={item.id} className=" w-auto h-70  rounded-lg overflow-hidden shadow-lg md:h-100 md:w-auto">
                        <div 
                            className="h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            <div className="p-4 absolute bottom-0 text-white bg-transparent bg-opacity-50 ">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-lg ">Budget : <strong>{item.price}</strong></p>
                        </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;