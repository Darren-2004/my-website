import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Reward() {
    const [rewards, setRewards] = useState([
    { id: "1", name: "Pritzker Prize", description: "Awarded to architects for their significant contributions to humanity through architecture.", year: "1988", organism: "Pritzker Architecture Prize" },
    { id: "2", name: "AIA Gold Medal", description: "Recognizes an individual whose work has had a lasting influence on the theory and practice of architecture.", year: "2019", organism: "American Institute of Architects" },
    { id: "3", name: "RIBA Stirling Prize", description: "Awarded annually for the best new building in the UK.", year: "2020", organism: "Royal Institute of British Architects" },
    { id: "4", name: "LEED Platinum Certification", description: "The highest certification awarded for sustainability in building design and construction.", year: "2021", organism: "U.S. Green Building Council" },
    { id: "5", name: "AIA Institute Honor Awards", description: "Recognizes excellence in architecture and design.", year: "2022", organism: "American Institute of Architects" },
    { id: "6", name: "World Architecture Festival Award", description: "Celebrates the best architectural projects worldwide.", year: "2023", organism: "World Architecture Festival" }

    ]);
    // const [reward, setReward] = useState({ id: "", name: "", description: "", year: "", organism: "" });

    // useEffect(() => {
    //     // Load rewards from local storage on component mount
    //     const storedRewards = JSON.parse(localStorage.getItem('rewards'));
    //     if (storedRewards) {
    //         setRewards(storedRewards);
    //     }
    // }, []);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setReward((prevReward) => ({ ...prevReward, [name]: value }));
    // };

    // const handleSub = (e) => {
    //     e.preventDefault();
    //     if (reward.year && reward.organism && reward.name && reward.description) {
    //         const newReward = { ...reward, id: uuidv4() };
    //         setRewards((prevRewards) => {
    //             const updatedRewards = [...prevRewards, newReward];
    //             localStorage.setItem('rewards', JSON.stringify(updatedRewards));
    //             return updatedRewards;
    //         });
    //         // Reset the form
    //         setReward({ id: "", name: "", description: "", year: "", organism: "" });
    //     }
    // };

    // const handleRemoveReward = (id) => {
    //     const updatedArray = rewards.filter(item => item.id !== id);
    //     setRewards(updatedArray);
    //     localStorage.setItem('rewards', JSON.stringify(updatedArray));
    // };

    return (
        <>
            <div className="p-4 divide-y-4 border-black border-t">
                <h1 className="text-5xl uppercase w-full bg-white font-mono p-4 md:text-7xl">
                    Rewards Section
                </h1>
                <div className="flex flex-col divide-y-2 last:border-b-2 gap-4 p-4 ">
                    {rewards.map((item) => (
                        <div key={item.id} className="p-4 rounded-lg grid grid-cols-3 truncate gap-4 w-full items-center">
                            <div className="text-xl border w-20 h-10 rounded-full flex justify-center col-span-1 items-center">{item.year}</div>
                            <div className="grid min-[1250px]:grid-cols-2 col-span-2 gap-4">
                                <h3 className="text-3xl font-mono">{item.name}</h3>
                                <div className="">
                                    <h2 className="text-2xl font-mono mb-2">{item.organism}</h2>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </div>
                            {/* <button 
                                onClick={() => handleRemoveReward(item.id)}
                                className="bg-red-500 text-white hidden p-2 rounded"
                            >
                                Delete
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* <form onSubmit={handleSub} className="flex flex-col gap-5 w-[300px] mx-auto mt-10 md:w-[800px] md:text-2xl">
                <select
                    name="year"
                    value={reward.year}
                    onChange={handleChange}
                    className="border-2 rounded p-2"
                >
                    <option value="" disabled>Select Year</option>
                    {Array.from({ length: (new Date().getFullYear() - 1900 + 1) }, (_, i) => (
                        <option key={i + 1900} value={i + 1900}>{i + 1900}</option>
                    ))}
                </select>
                <input
                    className="border-2 rounded p-2"
                    type="text"
                    name="organism"
                    placeholder="Organism"
                    value={reward.organism}
                    onChange={handleChange}
                />
                <input
                    className="border-2 rounded p-2"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={reward.name}
                    onChange={handleChange}
                />
                <input
                    className="border-2 rounded p-2"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={reward.description}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form> */}
        </>
    );
}

export default Reward;