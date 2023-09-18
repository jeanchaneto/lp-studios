import Image from "next/image";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useAudio } from "@/context/audioContext";
// Create a React component that will render wavesurfer.
import WaveSurfer from "wavesurfer.js";

import { useCallback, useEffect, useRef, useState } from "react";

//format time
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// WaveSurfer hook
const useWavesurfer = (containerRef, options) => {
  const [wavesurfer, setWavesurfer] = useState(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    // Create canvas gradient
    const ctx = document.createElement("canvas").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, "#042f2e");
    gradient.addColorStop(0.5, "#99f6e4");
    gradient.addColorStop(1, "#042f2e");

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
      waveColor: gradient,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = React.memo((props) => {
  const containerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer = useWavesurfer(containerRef, props);
  const { setBottomPlayerOn } = useAudio();

  // On play button click
  const onPlayClick = useCallback(() => {
    setBottomPlayerOn(false);
    wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
  }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <div className="w-full mr-4 flex flex-col sm:flex-row gap-6 items-center ">
      <div
        className=" group mr-4 w-full md:max-w-fit rounded-lg cursor-pointer relative bg-zinc-950 "
        onClick={onPlayClick}
      >
        <Image
          src={props.image}
          alt="album cover"
          width={256}
          height={256}
          className=" rounded-lg opacity-80 object-cover w-full "
        />
         <p className=" hidden min-[340px]:block absolute z-20 font-kallisto font-bold tracking-widest text-xl left-1/2 -translate-x-1/2 bottom-10 backdrop-blur-lg rounded-md py-2 px-1.5 text-zinc-100 ">
              {props.title}
            </p>
        {isPlaying ? (
          <div>
            <PauseIcon className="absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 w-16 h-16" />
            <p className="text-zinc-300 absolute left-1/2 -translate-x-1/2 bottom-1 text-xl font-bold">
              {formatTime(currentTime)}
            </p>
          </div>
        ) : (
          <PlayIcon className="absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 w-16 h-16" />
        )}
      </div>
      <div ref={containerRef} className="w-full flex-shrink-1 " />
    </div>
  );
});

export default WaveSurferPlayer;
