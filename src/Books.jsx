import { useState, useEffect } from "react";
import { useFetchData } from "./lib/fetchData";
import { motion } from "framer-motion";
import Book from "./comp/book";

export default function MyMovies()
{
    const {
        items: books,
        currentPage,
        totalPages,
        loading,
        initialize,
        goToPage
    } = useFetchData("books", 2, "pozicija");
    useEffect(() => {
        initialize(); // učitaj prvu stranicu
    }, [initialize]);
    
    return (
        <div className="moviesholder !min-h-[100svh] flex flex-col items-center justify-center gap-4 !mt-5 !mb-5">
            {loading ? (
                <img src="./spinner.svg" alt="Loading..." className="w-16 h-16"/>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                {books.map((book, i) => (
                    console.log(book),
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: i * 0.2}} viewport={{once: true}} key={book.id} className="w-[90vw] md:w-[60vw] lg:w-[40vw]">
                        <Book key={book.id} pozicija={book.pozicija} name={book.name} cover={book.cover} desc={book.desc} rating={book.rating} />
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