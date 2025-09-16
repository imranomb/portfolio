import React from 'react';
import {easeIn, motion} from 'framer-motion';
export default function Welcome() {
    React.useEffect(() => {
        const welcomeElement = document.getElementById("welcome_imran");
        const text = "imranomb";
        if(welcomeElement.childNodes.length === 0) { 
            text.split("").forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('letter');
            span.style.animationDelay = `${index * 150}ms`;
            welcomeElement.appendChild(span);
        })
        }
    }, []);
        
    
    return (
        <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 0.8, ease: easeIn, delay: 1.5}} id="welcome_imran" className="flex text-white items-center justify-center absolute w-full top-0 left-0 h-screen bg-gray-950">

        </motion.div>
    );
}