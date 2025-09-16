export default function Citat({citat, autor}){
    return (
        <div className="flex flex-col items-start">
            <p className="text-2xl max-w-md font-bold chara text-center mb-4 text-white font-bold">"{citat}"</p>
            <p className="text-gray-400 text-sm mt-2">- {autor}</p>
        </div>  
    )
}