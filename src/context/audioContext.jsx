import React, { createContext, useContext, useState, useCallback } from "react";

const AudioContext = createContext();
export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
    // const [audioUrl, setAudioUrl] = useState(null);
    const [audioUrl, setAudioUrl] = useState("/audio/testaudio.mp3");
    const [ bottomPlayerOn, setBottomPlayerOn ] = useState(false);

    return (
      <AudioContext.Provider value={{ audioUrl, setAudioUrl, bottomPlayerOn, setBottomPlayerOn }}>
        {children}
      </AudioContext.Provider>
    );
  };