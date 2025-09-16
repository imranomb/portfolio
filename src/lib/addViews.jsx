import React from "react";
import { database } from "./config";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export default async function AddViews({newView}) {
    const docRef = doc(database, "viewers", "listofviews");
    await updateDoc(docRef, {
    pregledi: arrayUnion(newView),
  });
}