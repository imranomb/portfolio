import { useState } from "react";

export default function Book({cover, name, rating, desc, pozicija})
{
    const[loaded, setLoaded] = useState(false);
    return (
    <div className="things_border flex flex-col md:flex-row gap-2.5 !p-5 bg-gray-300 border-6 border-white">
        <div className="relative">
            {!loaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
            )}
            <img onLoad={() => setLoaded(true)} src = {cover} alt={name} className={`w-32 h-48 object-cover rounded-lg shadow-md mr-4 ${loaded ? 'blur-0 scale-100' : 'blur-md scale-105'} ${pozicija % 2 ? 'rotate-[4deg]' : 'rotate-[-4deg]'}`} />
        </div>
        <div className="flex flex-col justify-start">
            <h3 className="text-xl font-semibold !inline-block text-white mb-2 bg-black !p-2 w-fit">{name}</h3>
            <p className="text-gray-400 font-bold mb-2">Ocjena: {rating}</p>
            <p className="text-black max-w-100">{desc}</p>
        </div>
    </div>
)}