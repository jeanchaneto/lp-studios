import { useEffect, useState } from "react";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "@/utils/firebase";

export function useLatestTracks() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLatestTracks() {
      try {
        const tracksCol = collection(db, "tracks");
        
        // Create a query against the collection.
        const q = query(tracksCol, orderBy("timestamp", "desc"), limit(4));
        
        const tracksSnapshot = await getDocs(q);
        const fetchedTracks = tracksSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        
        setTracks(fetchedTracks);
      } catch (error) {
        console.error("Error getting tracks:", error);
        setError(error);
      }
    }

    getLatestTracks();
  }, []);

  return {tracks, error};
}
