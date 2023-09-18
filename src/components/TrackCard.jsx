import React, { useState } from "react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Card, CardBody, Image } from "@nextui-org/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useAudio } from "@/context/audioContext";

const TrackCard = (props) => {
  const [active, setActive] = useState(false);
  const { setBottomPlayerOn, setAudioUrl, setContextTrack } = useAudio();

  const handlePlay = () => {
    setAudioUrl(props.previewUrl);
    setContextTrack(props);
    setBottomPlayerOn(true);
  };

  return (
    <FadeIn>

      <Card className=" sm:max-w-xs bg-transparent border border-white/20 text-zinc-100 ">
        <CardBody className="  ">
          <div
            className="relative cursor-pointer group mb-2 min-[340px]:mb-6 "
            onClick={handlePlay}
          >
            <PlayIcon className=" absolute top-1/2 left-1/2 z-20 text-zinc-100 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  transition-opacity duration-300 w-20 h-20 " />
            <p className=" hidden min-[340px]:block absolute z-20 font-kallisto font-bold tracking-widest text-xl left-1/2 -translate-x-1/2 bottom-8 backdrop-blur-lg rounded-md py-2 px-1.5">
              {props.title}
            </p>
            <Image
              src={props.image}
              alt="Album cover"
              className=" group-hover:opacity-50 transition-opacity duration-300"
            />
          </div>
          <Link
            href={`/ghost-produced-tracks/${props.id}`}
            className=" cursor-pointer hover:opacity-50 transition-opacity duration-300"
          >
            <h2 className="font-bold text-lg">{props.title}</h2>
            <p className=" text-teal-300 whitespace-nowrap ">{props.genre}</p>{" "}
          </Link>
          <div className=" my-4 flex gap-2">
            <p className=" text-sm bg-teal-950/80 rounded-lg py-1.5 px-1.5">
              {props.bpm} Bpm
            </p>
            <p className=" text-sm bg-cyan-950/80 rounded-lg py-1.5 px-1.5">
              {props.songKey}
            </p>
          </div>

          <div className="w-full flex justify-end">
            <Link
              href="#"
              className="relative rounded min-w-fit max-w-fit px-2 py-1 overflow-hidden group bg-blue-700  hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 text-zinc-100 hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 transition-all ease-out duration-300"
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
                <span className="relative whitespace-nowrap">
                  {props.price} €
                </span>
              </div>
            </Link>
          </div>
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default TrackCard;
