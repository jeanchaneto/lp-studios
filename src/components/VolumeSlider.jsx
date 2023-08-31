import { useWaveSurferCtx } from '@/context/waveSurferContext';
import React from 'react'

const VolumeSlider = () => {
    const { waveSurferInstances } = useWaveSurferCtx();

    const handleVolumeChange = (e) => {
      const volume = e.target.value / 100;
      Object.keys(waveSurferInstances).forEach((url) => {
        const wavesurfer = waveSurferInstances[url];
        if (wavesurfer) {
          wavesurfer.setVolume(volume);
        }
      });
    };
  
    return (
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="100"
        onChange={handleVolumeChange}
        className=" h-1 bg-teal-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 w-12"
      />
    );
  };

export default VolumeSlider