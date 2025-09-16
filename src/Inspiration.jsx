import { useEffect, useState } from 'react'
import Citat from './comp/citat';

export default function Inspiration() {
      const [citati, setCitati] = useState([]);

    useEffect(() => {
        // Učitavamo citate iz JSON fajla
        fetch('/src/assets/citati.json')
        .then((res) => res.json())
        .then((data) => setCitati(data));
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-14 p-8'>
            {citati.map((item, index) => (
            <Citat autor={item.autor} citat={item.citat} key={index} />
        ))}
        </div>
    )
}