import BottomPlayer from "@/components/BottomPlayer";
import { useAudio } from "@/context/audioContext";
import React from "react";
import { tracks } from "@/data/tracks";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card, CardBody, Image } from "@nextui-org/react";

const testpage = () => {
  const { setAudioUrl, bottomPlayerOn, setBottomPlayerOn } = useAudio();

  const handleAudioUrl = (url) => {
    setBottomPlayerOn(true);
    setAudioUrl(url);
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      
      className=" py-32 text-zinc-100 h-[800px]  "
    >
      
         <Card
        onMouseMove={handleMouseMove}
         className="relative bg-zinc-950 group  border border-white/20 text-zinc-100"
         >
          <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.2),
              transparent 80%
            )
          `,
        }}
      />
          <CardBody className="h-[200px] bg-transparent" >
            <h2>CARD</h2>
          </CardBody>
         </Card>

         <Card
        onMouseMove={handleMouseMove}
         className="relative bg-zinc-950 group  border border-white/20 text-zinc-100"
         >
          <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.2),
              transparent 80%
            )
          `,
        }}
      />
          <CardBody className="h-[200px] bg-transparent" >
            <h2>CARD</h2>
          </CardBody>
         </Card>

         <Card
        onMouseMove={handleMouseMove}
         className="relative bg-zinc-950 group  border border-white/20 text-zinc-100"
         >
          <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-50"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.2),
              transparent 80%
            )
          `,
        }}
      />
          <CardBody className="h-[200px] bg-transparent" >
            <h2>CARD</h2>
          </CardBody>
         </Card>
      <h1 className="mb-10">Test page</h1>
      <div className=" flex gap-6 ">
        {tracks.map((track) => (
          <button
            key={track.id}
            className=" bg-red-800 "
            onClick={() => handleAudioUrl(track.previewUrl)}
          >
            Load track
          </button>
        ))}
      </div>
    </div>
  );
};

export default testpage;
