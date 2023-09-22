import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Card, CardBody, Image } from "@nextui-org/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useAudio } from "@/context/audioContext";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const TrackCard = (props) => {
  const [active, setActive] = useState(false);
  const { setBottomPlayerOn, setAudioUrl, setContextTrack } = useAudio();

  const handlePlay = () => {
    setAudioUrl(props.previewUrl);
    setContextTrack(props);
    setBottomPlayerOn(true);
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <FadeIn>
      {props.inStock ? (
        <Card
          className=" mx-auto max-w-xs bg-zinc-900/50  text-zinc-100 relative group/card "
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/card:opacity-100 z-0 "
            style={{
              background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 212, 216, 0.10),
              transparent 80%
            )
          `,
            }}
          />

          <CardBody className=" ">
            <div
              className="relative cursor-pointer  mb-2 min-[340px]:mb-6 z-20 bg-zinc-950 rounded-xl group/image "
              onClick={handlePlay}
            >
              <div className="group-hover/image:opacity-20 transition-opacity duration-300">
                <Image
                  src={`/images/covers/${props.id}.jpg`}
                  alt="Album cover"
                  className="  "
                />
              </div>
              <PlayIcon className=" absolute top-1/2 left-1/2 z-30  text-zinc-100 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100  transition-opacity duration-300 w-20 h-20 " />
            </div>
            <Link
              href={`/ghost-produced-tracks/${props.id}`}
              className=" cursor-pointer group/link max-w-fit "
            >
              <div className="flex items-center gap-5">
                <h2 className="font-bold text-lg ">{props.title}</h2>
                <img
                  src="/icons/right-arrow.svg"
                  alt="Track infos"
                  className=" w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 "
                />
              </div>
              <p className=" text-teal-300 whitespace-nowrap ">{props.genre}</p>{" "}
            </Link>
            <div className=" my-4 flex gap-2">
              <div className=" flex gap-[2px] items-center text-sm bg-teal-950 rounded-lg py-1.5 px-1.5">
                <img
                  src="/icons/metronome.svg"
                  alt="Song key"
                  className=" w-4 h-4 "
                />
                <p>{props.bpm} Bpm</p>
              </div>
              <div className="flex text-sm bg-cyan-950 rounded-lg py-1.5 px-1.5 items-center gap-[2px] ">
                <img
                  src="/icons/treble-clef.svg"
                  alt="Song key"
                  className=" w-4 h-4 "
                />
                <p>{props.songKey}</p>
              </div>
            </div>

            <div className="w-full flex justify-end  ">
              <Link
                href="#"
                className="relative rounded-xl min-w-fit max-w-fit px-2 py-1 overflow-hidden group/button border border-teal-700  hover:bg-gradient-to-r hover:from-teal-700 hover:to-teal-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-teal-600 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover/button:-translate-x-40 ease"></span>
                <div className="flex items-baseline">
                  <img
                    src="/icons/shopping-cart.svg"
                    alt="Buy"
                    className="mr-1    h-[18px] translate-y-[1.5px] "
                  />
                  <span className="relative whitespace-nowrap">
                    {props.price} €
                  </span>
                </div>
              </Link>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className=" sm:max-w-xs  bg-zinc-900/50 text-zinc-100 relative group/card ">
          <CardBody className=" ">
            <div className="relative mb-2 min-[340px]:mb-6 z-20 bg-zinc-950 rounded-xl group/image ">
              <div className=" relative">
                <div className=" opacity-40 ">
                  <Image
                    src={`/images/covers/${props.id}.jpg`}
                    alt="Album cover"
                  />
                </div>
                <p className=" z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-kallisto font-bold tracking-widest text-red-700 border-3 border-red-700 rounded xl py-2 px-1.5 ">
                  SOLD
                </p>
              </div>
            </div>
            <div className=" group/link max-w-fit opacity-50 ">
              <div className="flex items-center gap-5">
                <h2 className="font-bold text-lg ">{props.title}</h2>
              </div>
              <p className=" text-teal-300 whitespace-nowrap ">{props.genre}</p>{" "}
            </div>
            <div className=" my-4 flex gap-2 opacity-50">
              <div className=" flex gap-[2px] items-center text-sm bg-teal-950 rounded-lg py-1.5 px-1.5">
                <img
                  src="/icons/metronome.svg"
                  alt="Song key"
                  className=" w-4 h-4 "
                />
                <p>{props.bpm} Bpm</p>
              </div>
              <div className="flex text-sm bg-cyan-950 rounded-lg py-1.5 px-1.5 items-center gap-[2px] ">
                <img
                  src="/icons/treble-clef.svg"
                  alt="Song key"
                  className=" w-4 h-4 "
                />
                <p>{props.songKey}</p>
              </div>
            </div>

            <div className="w-full flex justify-end opacity-50">
              <div className="relative rounded-xl min-w-fit max-w-fit px-2 py-1 overflow-hidden  border border-teal-700 text-zinc-100 ">
                <div className="flex items-baseline">
                  <img
                    src="/icons/shopping-cart.svg"
                    alt="Buy"
                    className="mr-1    h-[18px] translate-y-[1.5px] "
                  />
                  <p className="whitespace-nowrap">{props.price} €</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </FadeIn>
  );
};

export default TrackCard;
