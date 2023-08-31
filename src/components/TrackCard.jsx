import React from 'react'
import WaveSurferPlayer from './WaveSurferPlayer'
import Link from 'next/link'
import { InformationCircleIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

const TrackCard = (props) => {
  return (
    <div
          className=" justify-between  border w-full  border-zinc-400/20 rounded-lg p-2  sm:mx-0 bg-zinc-800/50 hover:bg-zinc-800/90 max-w-7xl "
          
        >
          <WaveSurferPlayer
            
            height={112}
            waveColor="#042f2e"
            progressColor="#0f766e"
            url={props.previewUrl}
            className=" w-full  "
            image={props.image}
          />
          <div className=" mt-4 md:mt-0 flex flex-col md:flex-row justify-between w-full items-baseline flex-shrink-0 ">
            <div className="flex items-baseline flex-2 w-full">
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

            <div className=" flex gap-2  w-full flex-1 items-baseline md:justify-end mt-2 ">
              <Link
                href="/"
                className=" h-7 min-w-[88px] whitespace-nowrap  flex justify-between gap-x-1.5 rounded-md bg-teal-700 px-2.5 py-1.5 text-sm font-semibold text-zinc-100 shadow-sm shadow-teal-700/40 hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                <ShoppingCartIcon
                  className="-ml-0.5 h-4 w-4 flex-shrink-0 "
                  aria-hidden="true"
                />
                {props.price} €
              </Link>

              <Link
                href="/"
                className="  whitespace-nowrap  h-7 flex items-center gap-x-1.5 rounded-md bg-teal-900/50 px-2.5 py-1.5 text-sm font-semibold text-zinc-100  hover:bg-teal-800/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <InformationCircleIcon
                  className="-ml-0.5 h-4 w-4"
                  aria-hidden="true"
                />
                Track Info
              </Link>
            </div>
          </div>
        </div>
  )
}

export default TrackCard