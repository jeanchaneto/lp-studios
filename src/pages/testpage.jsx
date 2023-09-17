import BottomPlayer from "@/components/BottomPlayer";
import { useAudio } from "@/context/audioContext";
import React from "react";
import { tracks } from "@/data/tracks";

const testpage = () => {
  const { setAudioUrl, bottomPlayerOn, setBottomPlayerOn } = useAudio();

  const handleAudioUrl = (url) => {
    setBottomPlayerOn(true);
    setAudioUrl(url);
  };

  return (
    <div className="bg bg-zinc-900 py-32 text-zinc-100 ">
      <h1 className="mb-10">Test page</h1>
      <div className=" flex gap-6 ">
        {tracks.map((track) => (
          <button key={track.id} className=" bg-red-800 " onClick={() => handleAudioUrl(track.previewUrl)}>
            Load track
          </button>
        ))}
      </div>
     
    </div>
  );
};

export default testpage;
