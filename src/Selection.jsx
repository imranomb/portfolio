import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import Life from "./Life";
import Views from "./Views";
import { animate, AnimatePresence, delay, motion, useAnimationControls } from "framer-motion";
import SelectOption from "./comp/SelectOption";


const Select = forwardRef(({changeSection}, ref) => {
    const [selectedSection, setSelectedSection] = useState(null);
    const[isDisplayed, setIsDisplayed] = useState(false);
    let controls = useAnimationControls();
    let click = new Audio("./sound/click.mp3");



    const handleSectionChange = async () => {
        click.play();
        setIsDisplayed(prev => !prev);
        console.log(isDisplayed);
        if (isDisplayed === false) {
            await controls.start("animate");
        } else {
            await controls.start("initial");
        }
        console.log
    }

     useImperativeHandle(ref, () => ({
        handleSectionChange,
    }))

    return(
       <>
        <AnimatePresence>
            {isDisplayed && (
            <motion.div initial={{scale: 0}} variants={{initial: {scale: 0, transition: {delay: 1.5}}, animate:{scale: 1, transition: {delay: 1.5, duration: 1}}}} exit={{scale: 0, transition:{duration: 0.3}}} animate={{scale: 1, transition:{delay: 0.3}}} className="absolute flex flex-col justify-center items-center gap-4" style={{backgroundImage: "url('./slika_0.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="flex gap-4 justify-start items-center">
                <SelectOption icon="./icons/netflix.webp" title="Netflix" page="movies" function1={changeSection} function2={handleSectionChange}/>
                <SelectOption icon="./icons/facebook.webp" title="Facebook" page="life" function1={changeSection} function2={handleSectionChange}/>
                <SelectOption icon="./icons/gallery.webp" title="Gallery" page="gallery" function1={changeSection} function2={handleSectionChange}/>
            </div>
            <div className="flex gap-4 !justify-start items-start">
                <SelectOption icon="./icons/steam.webp" title="Steam" page="games" function1={changeSection} function2={handleSectionChange}/>
                <SelectOption icon="./icons/books.webp" title="Books" page="books" function1={changeSection} function2={handleSectionChange}/>
                <SelectOption icon="./icons/contact.webp" title="SMS" page="contact" function1={changeSection} function2={handleSectionChange}/>
            </div>
            </motion.div>
            
            
        )}
        </AnimatePresence>
       </> 
    )

})

export default Select;