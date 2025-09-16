import React from "react";
import { database } from "./config";
import { doc, getDoc, updateDoc, arrayUnion, addDoc, collection } from "firebase/firestore";

export default function AddMovie(db, collectionName, data) {
    const [values, setValues] = React.useState({
        cover: "",
        ime: "",
        ocjena: "",
        recenzija: ""
    });
db
    function handleChange(e)
    {
        setValues({...values, [e.target.id]: e.target.value});
    }
    async function handleSubmit(e)
    {
        e.preventDefault();
        console.log(values);
        try {
            const docRef = await addDoc(collection(database, "movies"), values);
        } catch(error)
        {
            throw new Error("Greška pri dodavanju dokumenta: " + error);
        }
    }
    return (
        <div className="absolute top-0 left-0 bg-black text-white h-[100%] w-[100%] flex flex-col justify-center items-center z-555">
            <form className="flex flex-col gap-5 text-black" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="cover">Cover:</label>
                <input className="bg-white !p-5" type="text" placeholder="cover" id="cover" value={values.cover} onChange={(e) => handleChange(e)}/>
                <label htmlFor="ime">Name:</label>
                <input className="bg-white !p-5" type="text" placeholder="ime" id="ime" value={values.ime} onChange={(e) => handleChange(e)}/>
                <label htmlFor="ocjena">Raiting:</label>
                <input className="bg-white !p-5" type="number" placeholder="ocjena" id="ocjena" value={values.ocjena} onChange={(e) => handleChange(e)}/>
                <label htmlFor="cover">Recenzija:</label>
                <textarea className="bg-white !p-5" type="text" placeholder="recenzija" id="recenzija" value={values.recenzija} onChange={(e) => handleChange(e)}/>
                <button type="submit" onSubmit={(e) => handleSubmit(e)} className="bg-amber-700">Subimt</button>
            </form>
        </div>
    )
}