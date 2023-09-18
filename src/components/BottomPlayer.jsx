import WaveSurfer from "wavesurfer.js";
import { useAudio } from "@/context/audioContext";
import React, { useState, useCallback, useRef, useEffect, use } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    y: "80px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

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
    const gradient = ctx.createLinearGradient(0, 0, 0, 128);
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
  const [volume, setVolume] = useState(1);
  const {
    audioUrl,
    bottomPlayerOn,
    setBottomPlayerOn,
  } = useAudio();

  //Volume
  const handleVolumeChange = (e) => {
    const volumeValue = parseFloat(e.target.value);
    wavesurfer.setVolume(volumeValue);
    setVolume(volumeValue);
  };

  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
  }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(true);
    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime)),
      wavesurfer.on("ready", () => wavesurfer.play()), // Auto play when ready
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);


  return (
    <div className="  h-full flex-col md:flex md:flex-row md:gap-8  justify-between items-center text-xs px-6 lg:px-8  ">
      <div className="flex mt-2 md:mt-0 gap-6 items-center justify-between  min-[520px]:gap-8">
        <div
          onClick={onPlayClick}
          className=" relative flex-shrink-0 w-16 h-16 cursor-pointer group"
        >
          <Image
            src="/images/albumcover.jpg"
            alt="album cover"
            width={64}
            height={64}
            className=" rounded-lg opacity-70 object-cover   "
          />
          <button style={{ marginTop: "1em" }}>
            {isPlaying ? (
              <PauseIcon className=" absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 w-8 h-8 " />
            ) : (
              <PlayIcon className=" absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 w-8 h-8" />
            )}
          </button>
        </div>
        <a
          href="#"
          className=" whitespace-nowrap font-semibold flex hover:opacity-80 transition-opacity duration-300 "
        >
          Track Title
        </a>
        <p className=" whitespace-nowrap hidden min-[430px]:block text-zinc-300 ">
          Afro house
        </p>
        <p className=" whitespace-nowrap hidden min-[520px]:block text-zinc-300 ">
          {formatTime(currentTime)} / 9 min
        </p>
        <a
          href="#"
          className=" md:hidden relative rounded min-w-fit px-2 py-1 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <div className="flex items-center">
            <svg
              id="Layer_1"
              fill="#f4f4f5"
              viewBox="0 0 24 24"
              className="mr-1 h-4 w-4 text-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m22.294 7.827a1.622 1.622 0 0 0 -1.314-.674h-13.924l-.837-2.4a2 2 0 0 0 -1.891-1.345h-2.328a.6.6 0 0 0 0 1.2h2.328a.8.8 0 0 1 .758.539l.972 2.792.009.025 2.246 6.463a3.407 3.407 0 0 0 3.217 2.289h6.044a3.4 3.4 0 0 0 3.226-2.323l1.714-5.1a1.626 1.626 0 0 0 -.22-1.466zm-.916 1.08-1.713 5.1a2.206 2.206 0 0 1 -2.092 1.5h-6.044a2.207 2.207 0 0 1 -2.084-1.482l-1.972-5.671h13.506a.42.42 0 0 1 .4.554zm-8.457 10.44a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276zm6.26 0a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276z" />
            </svg>
            <span className="relative whitespace-nowrap">1000 €</span>
          </div>
        </a>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="h-1 bg-zinc-500 rounded-lg appearance-none focus:outline-none  w-12 cursor-pointer volume-slider hidden sm:block "
        />
      </div>
      <div className="flex  items-center gap-8 w-full mt-2 md:mt-0 ">
        <div className="w-full flex-shrink-1 " ref={containerRef} />
        <a
          href="#"
          className=" hidden md:block relative rounded min-w-fit max-w-fit px-2 py-1 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <div className="flex items-center">
            <svg
              id="Layer_1"
              fill="#f4f4f5"
              viewBox="0 0 24 24"
              className="mr-1 h-4 w-4 text-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m22.294 7.827a1.622 1.622 0 0 0 -1.314-.674h-13.924l-.837-2.4a2 2 0 0 0 -1.891-1.345h-2.328a.6.6 0 0 0 0 1.2h2.328a.8.8 0 0 1 .758.539l.972 2.792.009.025 2.246 6.463a3.407 3.407 0 0 0 3.217 2.289h6.044a3.4 3.4 0 0 0 3.226-2.323l1.714-5.1a1.626 1.626 0 0 0 -.22-1.466zm-.916 1.08-1.713 5.1a2.206 2.206 0 0 1 -2.092 1.5h-6.044a2.207 2.207 0 0 1 -2.084-1.482l-1.972-5.671h13.506a.42.42 0 0 1 .4.554zm-8.457 10.44a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276zm6.26 0a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276z" />
            </svg>
            <span className="relative whitespace-nowrap">1000 €</span>
          </div>
        </a>
      </div>
    </div>
  );
});

const BottomPLayer = () => {
  const { audioUrl, bottomPlayerOn } = useAudio();

  return (
    <AnimatePresence>
      {bottomPlayerOn && (
        <motion.div
          className=" w-full fixed bottom-0 inset-x-0 h-40 md:h-20 text-zinc-100 backdrop-blur-xl border-t border-white/20 z-20 "
          key="bottom-player"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <WaveSurferPlayer
            height={64}
            progressColor="#042f2e"
            url={audioUrl}
            barGap="1"
            barWidth="1"
            cursorWidth="1"
            cursorColor="#f4f4f5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomPLayer;
