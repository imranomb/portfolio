import { useState, useEffect } from "react";
import Picture from "./comp/picture";
import { AnimatePresence } from "framer-motion";

export default function Gallery()
{
    const [photos, setPhotos] = useState([]);
    const [showPic, setShowPic] = useState(false);
    const [currentPic, setCurrentPic] = useState({});
    
        useEffect(() => {
            // Učitavamo citate iz JSON fajla
            fetch('/src/assets/gallery.json')
            .then((res) => res.json())
            .then((data) => setPhotos(data));
        }, []);
        function showImage(e)
        {
            setCurrentPic({path: e.target.dataset.path, title: e.target.alt, desc: e.target.dataset.desc});
            console.log(currentPic);
            document.getElementById("gallery_bg").classList.toggle("blured");
            setShowPic(true);
        }
    return (
        <div className="w-[100%] h-[100%] min-h-[100svh] flex justify-center items-center relative">
            <div id="gallery_bg" className={`grid grid-cols-3 gap-4 !p-4 ${showPic ? 'blured' : ''}`}>
                {photos.map((photo, index) => (
                    <img key={photo.id} onClick={(e) => showImage(e)} src={photo.src} data-path={photo.path} alt={photo.title} data-desc={photo.desc} className="w-64 h-64 object-cover"/>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {showPic && <Picture path={currentPic.path} title={currentPic.title} desc={currentPic.desc} closePic={setShowPic} currentPic={currentPic}/>}
            </AnimatePresence>
        </div>

    )
}