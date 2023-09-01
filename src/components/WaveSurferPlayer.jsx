import Image from "next/image";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";

// Create a React component that will render wavesurfer.
import WaveSurfer from "wavesurfer.js";
import { useWaveSurferCtx } from "../context/waveSurferContext";

import { useCallback, useEffect, useRef, useState } from "react";

//format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// Props are wavesurfer options.
const WaveSurferPlayer = (props) => {
  const containerRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);

  const {
    waveSurferInstances,
    setWaveSurferInstances,
    currentlyPlaying,
    setCurrentlyPlaying,
  } = useWaveSurferCtx();

  useEffect(() => {
    const ws = WaveSurfer.create({
      container: containerRef.current,
      ...props,
    });

    setWaveSurferInstances((prev) => ({ ...prev, [props.url]: ws }));

    return () => {
      ws.destroy();
    };
  }, [props, setWaveSurferInstances]);

  const onPlayClick = useCallback(() => {
    const wavesurfer = waveSurferInstances[props.url];

    if (!wavesurfer) return;

    if (wavesurfer.isPlaying()) {
      wavesurfer.pause();
      setCurrentlyPlaying(null);
      setCurrentTime(0);
    } else {
      if (currentlyPlaying && currentlyPlaying !== props.url) {
        waveSurferInstances[currentlyPlaying].pause();
      }

      wavesurfer.play();
      setCurrentlyPlaying(props.url);
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime));
    }
  }, [waveSurferInstances, currentlyPlaying, setCurrentlyPlaying, props.url]);

  return (
    <div className=" w-full mr-4 flex">
      <div
        className=" group mr-4 rounded-lg flex-shrink-0 cursor-pointer relative bg-zinc-950 "
        onClick={onPlayClick}
      >
        <Image
          src={props.image}
          alt="album cover"
          width={112}
          height={112}
          className=" rounded-lg opacity-80 object-cover "
        />

        {currentlyPlaying === props.url ? (
          <div>
            <PauseIcon className="h-12 absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 " />
            <p className=" text-zinc-300 absolute left-1/2 -translate-x-1/2 bottom-1  ">
              {formatTime(currentTime)}
            </p>
          </div>
        ) : (
          <PlayIcon className="h-12 absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 " />
        )}
      </div>

      <div ref={containerRef} className="w-full " />
    </div>
  );
};

export default WaveSurferPlayer;