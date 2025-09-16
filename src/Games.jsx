import Game from "./comp/game";
import { useState, useEffect } from "react";
import { useFetchData } from "./lib/fetchData";
import { motion } from "framer-motion";

export default function Games()
{
    const {
            items: games,
            currentPage,
            totalPages,
            loading,
            initialize,
            goToPage
        } = useFetchData("games", 3, "pozicija");
        useEffect(() => {
            initialize(); // učitaj prvu stranicu
        }, [initialize]);
    return (
        <div className="min-h-[100svh] h-auto w-[100%] bg-gray-950 flex flex-col items-center justify-center text-white !p-5 gap-4">
            {loading ? (
                <img src="./spinner.svg" alt="Loading..." className="w-16 h-16"/>
            ) : (
                <div className="flex flex-col justify-center items-center gap-4 !p-4">
                {games.map((game, i) => (
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: i * 0.2}} viewport={{once: true}} key={game.pozicija} className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
                        <Game key={game.pozicija} name={game.name} cover={game.cover} desc={game.desc} time={game.time} raiting={game.raiting} />
                    </motion.div>
                ))}
                </div>
            )}
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1}} className="flex justify-center gap-3">
                {
                
                [...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`!p-1 border-2 border-white hover:cursor-pointer ${
                    currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-400'
                    }`}
                >
                    {i + 1}
                </button>
                ))}
            </motion.div>
        </div>
    )
}