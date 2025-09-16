"use client"

import { motion } from "framer-motion"
import {imageLoader} from "../lib/imageLoader"
import React from "react"
export default function Picture({path, title, desc, closePic})
{
    const [pic, setPic] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        async function fetchImage() {
            const imageUrl = await imageLoader({ src: path });
            setPic(imageUrl);
        }
        fetchImage();
    }, [])
    return (
        <motion.div initial={{opacity: 0, scale: 0, y: -15}} animate={{opacity: 1, scale: 1, y: 0}} exit={{opacity: 0, scale: 0, y: 15}} className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center" >
            <div className="relative flex justify-center items-center w-[80vw] max-w-2xl aspect-square bg-yellow-950 ">
                {!loaded && (
                    <img src="./spinner.svg" alt="Loading..." className="w-16 h-16 absolute left-[50%] translate-x-[-50%]"/>
                )}
                <img onLoad={() => setLoaded(true)} src={pic} alt={title} className="object-contain w-full h-full border-3 border-white"/>
                <div className="absolute bottom-0 w-full left-0 h-[30%] bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-md">{desc}</p>
                </div>
                <div className="absolute top-5 left-5 text-black !p-3 bg-white x_button text-3xl ring-7" onClick={() => {closePic(false); document.getElementById("gallery_bg").classList.toggle("blured");}}>X</div>
            </div>
            
        </motion.div>
    )
}