import { easeIn, motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function PictureFrame({path, opis, currentPic}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "all" });
    const [pic, setPic] = useState(null);

    React.useEffect(() => {
        console.log("droga")
        async function loadImage() {
            
        }
        loadImage();
    }, [currentPic])

    
    return (
        <motion.div ref={ref} initial={{opacity: 0}} animate={{opacity: isInView ? 1 : 0}} transition={{duration: 1, delay: 0.7}} viewport={{amount: "all"}} className="relative picture border-2 border-white rounded-lg p-4 bg-gray-200 shadow-lg flex flex-col items-center">
            <h2>ASIFAIUF</h2>
            <img src={pic} alt="Picture Frame" className="rounded-lg shadow-lg w-80 h-90 md:w-xl md:h-xl aspect-square object-cover hidden" />
            <div className="caption text-center mt-2 text-gray-700">{opis}</div>
        </motion.div>
    );
}