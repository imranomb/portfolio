
import React, { forwardRef } from "react";
import { database } from "./config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const FetchViews = ({onDataFetched}) => {
  React.useEffect(() => {
        async function getViews() {
            const docRef = doc(database, "viewers", "listofviews");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Podaci dokumenta:", docSnap.data());
                onDataFetched(docSnap.data().pregledi || []);
            } else {
                console.log("Dokument ne postoji!");
                return null;
            }
        }
        getViews();
    }, [onDataFetched]);
}

export default FetchViews;
