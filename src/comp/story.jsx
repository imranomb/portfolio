import { useInView, motion } from "framer-motion";
import PictureFrame from "./picture_frame";
import { useRef } from "react";

export default function Story({slika, opis_slike, prica, strana}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "all" });
    return (
        
        <div className={`flex-col md:flex ${strana} justify-center items-center gap-5 !mb-4.5 md:!mb-0 h-auto`} >
            <PictureFrame slika={slika} opis={opis_slike}/>
            <motion.div ref={ref} initial={{opacity: 0}} animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : -20}} transition={{duration: 1, delay: 0.7}} viewport={{amount: "all"}}><h1 className="text-3xl font-bold bg-radial from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">{prica}</h1></motion.div>
        </div>
    )
}