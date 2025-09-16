import { useState } from "react";
import FetchViews from "./lib/fetchViews";

export default function Views() {
    const[views, setViews] = useState([]);

    return (
        <>
            <FetchViews onDataFetched={setViews}/>
˙            <ul className="bg-blue-950 !p-7 rounded-3xl">
                <h1 className="font-bold text-orange-400 text-2xl">ZADNJI PREGLEDI</h1>
                {views.map((view, index) => (
                    <li key={index} className="text-white text-lg">
                        {index+1 + ". " + view}
                    </li>
                ))}
            </ul>
        </>
    );
}