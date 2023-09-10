import React, { useState } from "react";
import WaveSurferPlayer from "./WaveSurferPlayer";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

const TrackCard = (props) => {

const [active, setActive] = useState(false);

  return (
    <FadeIn>
    <div className=" justify-between  border w-full  border-zinc-400/20 rounded-lg p-2  sm:mx-0 bg-zinc-800/30  max-w-7xl ">
      <WaveSurferPlayer
        height={112}
        waveColor="#042f2e"
        progressColor="#0f766e"
        url={props.previewUrl}
        className=" w-full  "
        image={props.image}
        coverWidth={112}
        coverHeight={112}
      />
      <div className=" mt-4 md:mt-0 flex flex-col md:flex-row justify-between w-full items-baseline flex-shrink-0 ">
        <div className="flex items-baseline flex-2 lg:flex-1 w-full">
          <h3 className="text-lg font-bold text-zinc-300 mr-4 w-1/3 sm:w-1/4  ">
            {props.title}
          </h3>
          <p className="text-teal-200 whitespace-nowrap mr-4 w-1/3 sm:w-1/4 ">
            {props.genre}
          </p>
          <p className="text-zinc-400 text-sm whitespace-nowrap mr-4 w-1/3 sm:w-1/4 hidden min-[400px]:block  ">
            {props.bpm} Bpm
          </p>
          <p className="text-zinc-400 text-sm whitespace-nowrap mr-6 hidden sm:block w-1/4  ">
            {props.songKey}
          </p>
        </div>

        <div className=" flex gap-2  w-full flex-1 items-center md:justify-end mt-2 ">
          <Link
            href="/"
            className=" h-7 min-w-[88px] whitespace-nowrap items-center flex justify-between gap-x-1.5 rounded-md bg-blue-700 px-2.5 py-1.5 text-sm font-semibold text-zinc-100 shadow-sm shadow-cyan-700/40 hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
          >
            <svg
              id="Layer_1"
              fill="#f4f4f5"
              viewBox="0 0 24 24"
              className="-ml-0.5 h-5 w-5 text-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m22.294 7.827a1.622 1.622 0 0 0 -1.314-.674h-13.924l-.837-2.4a2 2 0 0 0 -1.891-1.345h-2.328a.6.6 0 0 0 0 1.2h2.328a.8.8 0 0 1 .758.539l.972 2.792.009.025 2.246 6.463a3.407 3.407 0 0 0 3.217 2.289h6.044a3.4 3.4 0 0 0 3.226-2.323l1.714-5.1a1.626 1.626 0 0 0 -.22-1.466zm-.916 1.08-1.713 5.1a2.206 2.206 0 0 1 -2.092 1.5h-6.044a2.207 2.207 0 0 1 -2.084-1.482l-1.972-5.671h13.506a.42.42 0 0 1 .4.554zm-8.457 10.44a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276zm6.26 0a1.275 1.275 0 1 1 -1.275-1.275 1.275 1.275 0 0 1 1.275 1.276z" />
            </svg>
            {props.price} €
          </Link>

          <Link
            href={`/ghost-produced-tracks/${props.id}`}
            className="  whitespace-nowrap  h-7 flex items-center gap-x-1.5 rounded-md bg-blue-950/50 px-2.5 py-1.5 text-sm font-semibold text-zinc-300  hover:bg-cyan-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            <svg
              className="-ml-0.5 h-4 w-4 "
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#d4d4d8"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <g>
                    <circle cx="256" cy="127" r="20" />
                    <path
                      d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
				s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512c46.813,0,92.618-12.758,132.461-36.893
				c9.448-5.724,12.467-18.022,6.744-27.469c-5.723-9.448-18.021-12.467-27.468-6.744C334.144,461.244,295.506,472,256,472
				c-119.103,0-216-96.897-216-216S136.897,40,256,40s216,96.897,216,216c0,42.589-12.665,84.044-36.627,119.884
				c-6.139,9.182-3.672,21.603,5.511,27.742c9.183,6.138,21.603,3.673,27.742-5.51C497.001,355.674,512,306.53,512,256
				C512,187.62,485.371,123.333,437.02,74.98z"
                    />
                    <path d="M256,187c-11.046,0-20,8.954-20,20v178c0,11.046,8.954,20,20,20s20-8.954,20-20V207C276,195.954,267.046,187,256,187z" />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            Track Info
          </Link>
        </div>
      </div>
    </div>
    </FadeIn>
  );
};

export default TrackCard;
