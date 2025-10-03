import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import AddViews from "../lib/addViews";
export default function Login({start, changeBackground, changeErrorTrigger}) {
    const[isDisplayed, setIsDisplayed] = useState(true);
    const[currentName, changeName] = useState("");
    const handleChange = (event) => {
        changeName(event.target.value);
    };
    let winxp = new Audio("./sound/windows_xp.mp3");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentName.trim() === "") changeErrorTrigger();
        else {
            controls.start("endAnim");
        setTimeout(() =>{
            setIsDisplayed(false);
            start();
        }, 500)
        try {
            await AddViews({newView: currentName});
            changeName(""); // Clear the input field after submission
            changeBackground(true);
            winxp.play();
        } catch (error) {
            console.error("Error adding view:", error);
        }
        }}
    let controls = useAnimationControls();
    useEffect(() => {
        controls.start("firstAnim");
    }, []);
  return (
    <motion.div variants={{initial:{scale: 0}, firstAnim:{scale: 1, transition:{delay: 1.8, duration: 0.5}}, endAnim:{scale: 0, transition:{delay: 0, duration: 0.5}}}} initial="initial" animate={controls} className={`${isDisplayed ? "flex-col" : "hidden"}`}>
        <span className="text-white font-bold"><span className="text-amber-300 font-bold">hey,</span> what is your name?</span>
        <form className="flex flex-col gap-4">
            <input style={{padding: "10px"}} className="border-white border-2 rounded-md text-xl text-white bg-gray-800"
            type="text"
            value={currentName}
            onChange={handleChange}
            placeholder="Vaše ime..."
        />
        <button className="bg-white hover:bg-blue-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-30 hover:scale-110 cursor-pointer duration-150 ease-in" onClick={(e) => handleSubmit(e)}>Pristupi</button>
        </form>
        <h2 className="text-center text-red-900 max-w-3xs !mt-5"><span className="text-red-500 font-bold">Warning!</span> This application is currently under development. Some features are incomplete or may not function as intended.</h2>
    </motion.div>
    );
}