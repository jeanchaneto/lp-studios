import React, { createContext, useContext, useState } from "react";

const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [bottomPlayerOn, setBottomPlayerOn] = useState(false);
  const [ contextTrack, setContextTrack ] = useState(null);

  return (
    <AudioContext.Provider
      value={{
        audioUrl,
        setAudioUrl,
        bottomPlayerOn,
        setBottomPlayerOn,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
