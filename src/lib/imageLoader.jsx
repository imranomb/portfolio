import { storage } from "./config";
import { ref, getDownloadURL } from "firebase/storage";
export async function imageLoader({ src, setPic }) 
{
        try {
            const imageref = ref(storage, src); // koristi dinamički src
            const url = await getDownloadURL(imageref);
            return url;
        } catch (error) {
            console.error("Greška pri dobavljanju URL-a slike:", error);
            return null;
    }
}