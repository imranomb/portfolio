
import React, { useCallback, useState } from "react";
import { database } from "./config";
import { collection, doc, getCountFromServer, getDoc, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";

export const useFetchData = (collectionName, pageSize, sortKey) => {
  const [items, setItems] = useState([]);
  const [pageCursors, setPageCursors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const resolveCollectionRef = () => {
    if (typeof collectionName === 'string') {
      return collection(database, collectionName);
    }
    if (collectionName?.path) {
      return collection(database, collectionName.path);
    }
    throw new Error('collectionName must be a string or CollectionReference with .path');
  };

  const initialize = useCallback(async () => {
    setLoading(true);
    try {
      const ref = resolveCollectionRef();
      const countSnap = await getCountFromServer(ref);
      const totalDocs = countSnap.data().count;
      setTotalPages(Math.ceil(totalDocs / pageSize));
      await goToPage(1);
    } catch (error) {
      console.error('Greška pri inicijalizaciji:', error);
    } finally {
      setLoading(false);
    }
  }, [collectionName, pageSize]);

  const goToPage = useCallback(async (pageIndex) => {
    setLoading(true);
    try {
      const ref = resolveCollectionRef();
      const cursor = pageCursors[pageIndex - 2] || null;

      const constraints = [orderBy(sortKey), limit(pageSize)];
      if (cursor) constraints.push(startAfter(cursor));

      const q = query(ref, ...constraints);
      const snapshot = await getDocs(q);
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setItems(docs);
      setCurrentPage(pageIndex);

      if (snapshot.docs.length > 0 && pageCursors.length < pageIndex) {
        const newCursor = snapshot.docs[snapshot.docs.length - 1];
        setPageCursors(prev => [...prev, newCursor]);
      }
    } catch (error) {
      console.error('Greška pri paginaciji:', error);
    } finally {
      setLoading(false);
    }
  }, [collectionName, pageSize, sortKey, pageCursors]);

  return {
    items,
    currentPage,
    totalPages,
    loading,
    initialize,
    goToPage
  };
}
