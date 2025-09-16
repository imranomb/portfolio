export default function SelectOption({icon, title, page, function1, function2})
{

    return (
        <div onClick={() => {function1(page); function2();}} className="flex group shadow-2xl drop-shadow-2xl flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300" >
            <img src={icon} alt={title} className="w-16 h-16"/>
            <p className="relative z-22 text-white text-xl text-center after:w-full after:bg-black after:absolute after:left-0 after:top-1 after:h-full after:z-[-1] after:translate-x-5/6 after:opacity-0 group-hover:after:opacity-100 group-hover:after:translate-x-0 transition-all duration-300">{title}</p>
        </div>
    )
}