import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

export function useTrack(trackId) {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!trackId) return;

    async function fetchTrack() {
      try {
        const trackRef = doc(db, "tracks", trackId);
        const trackDoc = await getDoc(trackRef);
        
        if (!trackDoc.exists) {
          setError("Track not found");
          return;
        }

        setTrack({ id: trackDoc.id, ...trackDoc.data() });
      } catch (err) {
        console.error("Error fetching track:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrack();
  }, [trackId]);

  return { track, error, loading };
}
