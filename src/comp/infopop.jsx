import { easeInOut, motion, useAnimationControls } from "framer-motion"
export default function InfoPop({info, anim}) {
    return (
        <motion.div variants={{initial: {scale: 0, y: 15}, show:{scale: 1, y: 0}, exit: {scale: 0, y: -15}}} transition={{duration: 0.5, ease: easeInOut}} initial="initial" animate="show" exit="exit" className="!p-3 absolute left-[50%] top-[10%] -translate-x-1/2 bg-gray-800 text-white p-5 rounded-md border-2 border-white">
            <h2 className="text-red-500 text-2xl font-bold">Error!</h2>
            <p className="max-w-xl">{info}</p>
        </motion.div>
    )
}