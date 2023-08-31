// WaveSurferContext.js
import React, { createContext, useContext, useState } from "react";

const WaveSurferContext = createContext();

export const useWaveSurferCtx = () => useContext(WaveSurferContext);

export const WaveSurferProvider = ({ children }) => {
  const [waveSurferInstances, setWaveSurferInstances] = useState({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  return (
    <WaveSurferContext.Provider
      value={{
        waveSurferInstances,
        setWaveSurferInstances,
        currentlyPlaying,
        setCurrentlyPlaying,
      }}
    >
      {children}
    </WaveSurferContext.Provider>
  );
};
