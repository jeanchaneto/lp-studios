import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/utils/firebase";

export function useTracks() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTracks() {
      try {
        const tracksCol = collection(db, "tracks");
        const q = query(tracksCol, orderBy("timestamp", "desc"));

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

    getTracks();
  }, []);

  return { tracks, error };
}
