import { motion } from "framer-motion";
import {useState} from "react";
export default function Game({name, cover, desc, time, raiting})
{
    const[loaded, setLoaded] = useState(false);
    return (
        <motion.div className="!p-2 bg-blue-950 h-auto flex">
        <div className="relative">
            {!loaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
            )}
            <img onLoad={() => setLoaded(true)} src = {cover} alt={name} className={`aspect-square h-[90px] w-[90px] object-contain shadow-md ${loaded ? 'blur-0 scale-100' : 'blur-md scale-105'}`} />
        </div>
        <div className="mt-2">
            <h2 className="text-xl font-semibold text-white mb-1 ">{name}</h2>
            <h2 className="text-gray-400 font-semibold">Time played: {time} h</h2>
            <div className="raiting flex gap-1">
                {[...Array(raiting)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < raiting ? 'text-yellow-400' : 'text-gray-500'}`}>&#9733;</span>
                ))}
            </div>
        </div>
        </motion.div>
    )
}