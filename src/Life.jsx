import Story from './comp/story'
import { motion } from 'framer-motion';
export default function Life() {
    return (
        <div className='!mt-5 !mb-5 flex-col !gap-0 justify-center items-center h-auto min-h-[100svh]'>
            <motion.div className="flex w-full justify-center items-center gap-5 !mt-15 bg-blue-950 !p-5">
                <img src='./avatar.webp' className='aspect-square max-w-32 border-4 border-white'/>
                <div className='flex flex-col gap-2 max-w-xl'>
                    <h1 className='text-2xl font-bold text-white'>Imran Omerbašić</h1>
                    <div className='flex !gap-1'>
                        <span className='font-bold text-white'>instagram</span>
                        <img src='./instagram.png' className='w-6 aspect-square'/>
                    </div>
                </div>    
            </motion.div>
            <motion.div className='bg-gray-500 w-full !p-3'>
                <h1 className='text-xl font-bold text-white !p-3 !m-5 !mt-5 border-b-2 border-blue-950'>Based in Bosnia.</h1>
                <h1 className='text-xl font-bold text-white !p-3 !m-5 !mt-5 border-b-2 border-blue-950'>Freelencing as web developer.</h1>
                <h1 className='text-xl font-bold text-white !p-3 !m-5 !mt-5 border-b-2 border-blue-950'>Working within React, NEXT.JS.</h1>
            </motion.div>
        </div>
    );
}